import React from 'react'

function FormMensaje({validarMensaje, mensajeError}) {
  return (
    <div>
        <label htmlFor="mensaje" for="mensaje">Mensaje*</label>
        <textarea name="mensaje" id="mensaje" required onChange={(e)=>validarMensaje(e.target.value)}></textarea>
        <label htmlFor="mensaje" for="mensaje" className='error'>{mensajeError}</label>
    </div>
  )
}

export default FormMensaje