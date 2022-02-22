import React, {useState} from 'react'

function FormularioCotizacion({pedirCotizacion, habilitarForm, formRef}) {

  return (
    <form onSubmit={(e)=> pedirCotizacion(e)} className='form-cotizacion off' ref={formRef} >
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name='nombre' id='nombre'  />
        <label htmlFor="mail">Mail</label>
        <input type="text" id='mail' name='mail' placeholder='correo@gmail.com' />

        <input type="submit" value='Pedir cotización' />
        <button onClick={()=> habilitarForm()}>Seguir comprando</button>
    </form>
  )
}

export default FormularioCotizacion