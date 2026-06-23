import { useTranslation } from "react-i18next"

function FormCorreo({validarEmail, mailError}) {

  const {t} = useTranslation();
  return (
    <div>
        <label htmlFor="mail">{t("contacto.form.lbl4")}</label>
        <input type="email"  id='mail' name='email' required onChange={(e)=>validarEmail(e.target.value)} />
        <label htmlFor="email" className='error'>{mailError}</label>
    </div>
  )
}

export default FormCorreo