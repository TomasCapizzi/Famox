import { useTranslation } from "react-i18next"


function FormNombre({validarNombre, nombreError}) {

  const {t} = useTranslation();

  return (
    <div>
        <label htmlFor="nombre">{t("contacto.form.lbl1")}</label>
        <input type="text" id='nombre' name='nombre' required onChange={(e)=>validarNombre(e.target.value)} />
        <label htmlFor="nombre" className='error'>{nombreError}</label>
    </div>
  )
}

export default FormNombre