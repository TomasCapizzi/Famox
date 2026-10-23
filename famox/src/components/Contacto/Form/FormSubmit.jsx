
import { useTranslation } from "react-i18next";

function FormSubmit({ handlerSubmit, enviando = false }) {
  const { t } = useTranslation();

  return (
    <div className={handlerSubmit ? "" : "disabled"}>
      <button
        type="submit"
        className="submit"
        disabled={enviando}
      >
        {enviando
          ? t("contacto.page.sendingButton")
          : t("contacto.page.sendButton")}
      </button>
    </div>
  );
}

export default FormSubmit;
