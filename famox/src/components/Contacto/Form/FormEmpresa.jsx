import { useTranslation } from "react-i18next"

function FormEmpresa({validarEmpresa, empresaError}) {

  const {t} = useTranslation();

  return (
    <div>
        <label htmlFor="empresa">{t("contacto.form.lbl2")}</label>
        <input type="text" id='empresa' name='empresa' required onChange={(e)=>validarEmpresa(e.target.value)} />
        <label htmlFor="empresa" className='error'>{empresaError}</label>
    </div>
  )
}

export default FormEmpresa