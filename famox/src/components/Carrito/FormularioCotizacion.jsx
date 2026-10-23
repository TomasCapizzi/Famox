
import { useTranslation } from "react-i18next";
import useValidarFormCotizacion from "hooks/forms/useValidarFormCotizacion";

function FormularioCotizacion({
  pedirCotizacion,
  habilitarForm,
  enviando = false
}) {
  const { t } = useTranslation();

  const {
    validarNombre,
    validarEmpresa,
    validarMail,
    mailError,
    empresaError,
    nombreError,
    handlerSubmit
  } = useValidarFormCotizacion();

  return (
    <form
      className="form-cotizacion"
      onSubmit={pedirCotizacion}
    >
      <div className="form-cotizacion__grid">
        <div className="form-cotizacion__field">
          <label htmlFor="cotizacion-nombre">
            {t("cart.form.lbl1")}
          </label>

          <input
            type="text"
            name="nombre"
            id="cotizacion-nombre"
            autoComplete="name"
            required
            onChange={(e) =>
              validarNombre(e.target.value)
            }
          />

          {nombreError && (
            <p className="error" role="alert">
              {nombreError}
            </p>
          )}
        </div>

        <div className="form-cotizacion__field">
          <label htmlFor="cotizacion-empresa">
            {t("cart.form.lbl2")}
          </label>

          <input
            type="text"
            name="empresa"
            id="cotizacion-empresa"
            autoComplete="organization"
            required
            onChange={(e) =>
              validarEmpresa(e.target.value)
            }
          />

          {empresaError && (
            <p className="error" role="alert">
              {empresaError}
            </p>
          )}
        </div>

        <div className="form-cotizacion__field form-cotizacion__field--full">
          <label htmlFor="cotizacion-mail">
            {t("cart.form.lbl3")}
          </label>

          <input
            type="email"
            name="mail"
            id="cotizacion-mail"
            autoComplete="email"
            placeholder="correo@empresa.com"
            required
            onChange={(e) =>
              validarMail(e.target.value)
            }
          />

          {mailError && (
            <p className="error" role="alert">
              {mailError}
            </p>
          )}
        </div>
      </div>

      <div className="form-cotizacion__actions">
        <button
          type="button"
          className="btn-seguirComprando"
          onClick={habilitarForm}
          disabled={enviando}
        >
          {t("cart.form.btn2")}
        </button>

        <button
          type="submit"
          className="btn-submit"
          disabled={!handlerSubmit || enviando}
        >
          {enviando
            ? t("cart.page.sending")
            : t("cart.form.btn1")}
        </button>
      </div>
    </form>
  );
}

export default FormularioCotizacion;
