
import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CarritoContext } from "store/carritoContext";
import CarritoLleno from "components/Carrito/CarritoLleno";
import CarritoVacio from "components/Carrito/CarritoVacio";
import FormularioCotizacion from "components/Carrito/FormularioCotizacion";

function Carrito() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { carro, borrarCarrito } = useContext(CarritoContext);

  const [formHandler, setFormHandler] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState(false);
  const envioEnCurso = useRef(false);

  const cantidadArticulos = carro.length;

  async function pedirCotizacion(e) {
    e.preventDefault();

    if (envioEnCurso.current || carro.length === 0) {
      return;
    }

    const form = e.currentTarget;

    const pedido = {
      nombre: form.elements.namedItem("nombre").value,
      empresa: form.elements.namedItem("empresa").value,
      email: form.elements.namedItem("mail").value,
      carro
    };

    envioEnCurso.current = true;
    setEnviando(true);
    setErrorEnvio(false);

    try {
      const res = await fetch(
        "https://famox-api.vercel.app/formulario/venta",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(pedido)
        }
      );

      if (!res.ok) {
        throw new Error("Error al enviar la cotización");
      }

      borrarCarrito();
      navigate("/checkout");

    } catch (error) {
      console.error("Error de cotización:", error);
      setErrorEnvio(true);

    } finally {
      envioEnCurso.current = false;
      setEnviando(false);
    }
  }

  return (
    <main className="carrito">
      <Helmet>
        <title>{t("cart.page.title")} | Famox</title>
        <meta
          name="description"
          content={t("cart.page.description")}
        />
      </Helmet>

      <div className="carrito__container">
        <header className="carrito__header">
          <span className="carrito__eyebrow">
            {t("cart.page.eyebrow")}
          </span>

          <h1>{t("cart.page.title")}</h1>

          <p>{t("cart.page.description")}</p>
        </header>

        <div className="carrito-container">
          {cantidadArticulos === 0 ? (
            <div className="carrito__empty">
              <CarritoVacio />

              <Link
                to="/tienda"
                className="carrito__primary"
              >
                {t("cart.page.continueShopping")}
              </Link>
            </div>
          ) : (
            <>
              <section className="carrito__products">
                <div className="carrito__section-header">
                  <h2>{t("cart.page.productsTitle")}</h2>

                  <span>
                    {cantidadArticulos}{" "}
                    {t("cart.page.items")}
                  </span>
                </div>

                <CarritoLleno carro={carro} />

                <div className="carrito__actions">
                  <Link
                    to="/tienda"
                    className="carrito__secondary"
                  >
                    {t("cart.page.continueShopping")}
                  </Link>

                  {!formHandler && (
                    <button
                      type="button"
                      className="carrito__primary"
                      onClick={() => setFormHandler(true)}
                    >
                      {t("cart.page.requestQuote")}
                    </button>
                  )}
                </div>
              </section>

              {formHandler && (
                <section className="carrito__quote">
                  <div className="carrito__quote-header">
                    <h2>{t("cart.form.title")}</h2>

                    <p>{t("cart.page.formDescription")}</p>
                  </div>

                  <FormularioCotizacion
                    pedirCotizacion={pedirCotizacion}
                    habilitarForm={() => {
                      if (!enviando) {
                        setFormHandler(false);
                      }
                    }}
                    enviando={enviando}
                  />

                  {errorEnvio && (
                    <p
                      className="carrito__error"
                      role="alert"
                    >
                      {t("cart.page.sendError")}
                    </p>
                  )}
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Carrito;
