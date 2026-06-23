import useValidarFormCotizacion from 'hooks/forms/useValidarFormCotizacion';
import { useTranslation } from 'react-i18next';

function FormularioCotizacion({pedirCotizacion, habilitarForm, formRef}) {

  const {t} = useTranslation();
  const {
    validarNombre,
    validarEmpresa,
    validarMail,
    mailError,
    empresaError,
    nombreError,
    handlerSubmit,
  } = useValidarFormCotizacion();

  return (
    <form action='' className='form-cotizacion off' ref={formRef} onSubmit={(e)=> pedirCotizacion(e)} >
        <label htmlFor="nombre">{t("cart.form.lbl1")}</label>
        <input type="text" name='nombre' id='nombre' required onChange={(e)=>validarNombre(e.target.value)}  />
        <label htmlFor="nombre" className='error'>{nombreError}</label>
        <label htmlFor="nombre">{t("cart.form.lbl2")}</label>
        <input type="text" name='empresa' id='empresa' required onChange={(e)=>validarEmpresa(e.target.value)} />
        <label htmlFor="nombre" className='error'>{empresaError}</label>
        <label htmlFor="mail">{t("cart.form.lbl3")}</label>
        <input type="text" id='mail' name='mail' placeholder='correo@gmail.com' required onChange={(e)=>validarMail(e.target.value)} />
        <label htmlFor="nombre" className='error'>{mailError}</label>
        <div className={handlerSubmit? '':'disabled'}>
          <input type="submit" value={t("cart.form.btn1")} className='btn-submit' />
        </div>
        <button className='btn-seguirComprando' onClick={()=> habilitarForm()}>{t("cart.form.btn2")}</button>
    </form>
  )
}

export default FormularioCotizacion;