import React from 'react'

function FormularioCotizacion({pedirCotizacion, habilitarForm, formRef}) {

//method='POST' target='_blank'
  return (
    <form action='' className='form-cotizacion off' ref={formRef}   onSubmit={(e)=> pedirCotizacion(e)} >
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name='nombre' id='nombre'  />
        <label htmlFor="nombre">Empresa</label>
        <input type="text" name='empresa' id='empresa'  />
        <label htmlFor="mail">Mail</label>
        <input type="text" id='mail' name='mail' placeholder='correo@gmail.com' />
        <input type="submit" value='Pedir cotización' className='btn-submit' />
        <button onClick={()=> habilitarForm()}>Seguir comprando</button>
    </form>
  )
}

export default FormularioCotizacion;