
import { useTranslation } from "react-i18next";

function Calidad() {
  const { t } = useTranslation();

  return (
    <section className="seccion4">
      <div>
        <h2>{t("nosotros.title4")}</h2>
        <p>{t("nosotros.txt4")}</p>
      </div>

      <img
        src="/img/Nosotros/nos3.jpg"
        alt="Equipo de gasoterapia Famox"
        loading="lazy"
      />
    </section>
  );
}

export default Calidad;
