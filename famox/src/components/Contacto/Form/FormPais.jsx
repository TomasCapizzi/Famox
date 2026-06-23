import { useTranslation } from "react-i18next"

function FormPais() {

  const {t} = useTranslation()

  return (
    <div>
        <label htmlFor="pais">{t("contacto.form.lbl3")}</label>
        <input type="text" id='pais' name='pais'/>
    </div>
  )
}

export default FormPais