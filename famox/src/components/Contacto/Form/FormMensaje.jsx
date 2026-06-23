import { useTranslation } from "react-i18next"

function FormMensaje({validarMensaje, mensajeError}) {

  const {t} = useTranslation();

  return (
    <div>
        <label htmlFor="mensaje">{t("contacto.form.lbl6")}</label>
        <textarea name="mensaje" id="mensaje" required onChange={(e)=>validarMensaje(e.target.value)}></textarea>
        <label htmlFor="mensaje" className='error'>{mensajeError}</label>
    </div>
  )
}

export default FormMensaje