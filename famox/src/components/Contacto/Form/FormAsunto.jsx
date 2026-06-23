import { useTranslation } from "react-i18next"

function FormAsunto({validarAsunto, asuntoError}) {

  const {t} = useTranslation();

  return (
    <div>
        <label htmlFor="asunto">{t("contacto.form.lbl5")}</label>
        <input type="text"  id='asunto' name='asunto' required onChange={(e)=>validarAsunto(e.target.value)} />
        <label htmlFor="asunto" className='error'>{asuntoError}</label>
    </div>
  )
}

export default FormAsunto