
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Form from "components/Contacto/Form/Form";
import Info, {
  MapaContacto
} from "components/Contacto/Info/Info";
import Notificacion from "components/Contacto/Notificacion";

import useNotificacion from "hooks/contacto/useNotificacion";
import useResetValores from "hooks/contacto/useResetValores";

function Contacto() {
  const { t } = useTranslation();

  const refNoti = useRef(null);
  const envioEnCurso = useRef(false);

  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState(false);

  const { resetValores } = useResetValores();
  const { mostrarNotificacion } = useNotificacion();

  async function enviarConsulta(e, honeypot, reiniciarValidacion) {
    e.preventDefault();

    // Campo oculto antispam
    if (honeypot || envioEnCurso.current) return;

    const form = e.currentTarget;

    const consulta = {
      nombre: form.elements.namedItem("nombre").value,
      email: form.elements.namedItem("mail").value,
      pais: form.elements.namedItem("pais").value,
      asunto: form.elements.namedItem("asunto").value,
      empresa: form.elements.namedItem("empresa").value,
      mensaje: form.elements.namedItem("mensaje").value,
      extra_field: form.elements.namedItem("extra_field").value
    };

    envioEnCurso.current = true;
    setEnviando(true);
    setErrorEnvio(false);

    try {
      const respuesta = await fetch(
        "https://famox-api.vercel.app/formulario/contacto",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(consulta)
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al enviar la consulta");
      }

      mostrarNotificacion(refNoti);
      resetValores(e);
      reiniciarValidacion();

    } catch (error) {
      console.error("Error de contacto:", error);
      setErrorEnvio(true);

    } finally {
      envioEnCurso.current = false;
      setEnviando(false);
    }
  }

  return (
    <main className="contacto">
      <Helmet>
        <title>{t("contacto.page.title")} | Famox</title>
        <meta
          name="description"
          content={t("contacto.page.description")}
        />
      </Helmet>

      <div className="contacto__container">

        <header className="contacto__header">
          <span className="contacto__eyebrow">
            {t("contacto.page.eyebrow")}
          </span>

          <h1>{t("contacto.page.title")}</h1>

          <p>{t("contacto.page.description")}</p>
        </header>

        <div className="contacto__layout">
          <Info />

          <div className="contacto__form-card">
            <Form
              enviarConsulta={enviarConsulta}
              enviando={enviando}
            />
            <Notificacion refNoti={refNoti} />

            {enviando && (
              <p className="contacto__status" role="status">
                {t("contacto.page.sending")}
              </p>
            )}

            {errorEnvio && (
              <p className="contacto__error" role="alert">
                {t("contacto.page.sendError")}
              </p>
            )}
          </div>

          <MapaContacto />
        </div>

      </div>
    </main>
  );
}

export default Contacto;
