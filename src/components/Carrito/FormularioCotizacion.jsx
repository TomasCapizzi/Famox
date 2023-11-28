import React from 'react'
import useValidarFormCotizacion from 'hooks/forms/useValidarFormCotizacion';

function FormularioCotizacion({pedirCotizacion, habilitarForm, formRef}) {

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
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name='nombre' id='nombre' required onChange={(e)=>validarNombre(e.target.value)}  />
        <label htmlFor="nombre" className='error'>{nombreError}</label>
        <label htmlFor="nombre">Empresa / Hospital</label>
        <input type="text" name='empresa' id='empresa' required onChange={(e)=>validarEmpresa(e.target.value)} />
        <label htmlFor="nombre" className='error'>{empresaError}</label>
        <label htmlFor="mail">Mail</label>
        <input type="text" id='mail' name='mail' placeholder='correo@gmail.com' required onChange={(e)=>validarMail(e.target.value)} />
        <label htmlFor="nombre" className='error'>{mailError}</label>
        <div className={handlerSubmit? '':'disabled'}>
          <input type="submit" value='Pedir cotización' className='btn-submit' />
        </div>
        <button className='btn-seguirComprando' onClick={()=> habilitarForm()}>Seguir comprando</button>
    </form>
  )
}

export default FormularioCotizacion;