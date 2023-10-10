import React from 'react'

function FormNombre({validarNombre, nombreError}) {
  return (
    <div>
        <label htmlFor="nombre" for="nombre">Nombre*</label>
        <input type="text" id='nombre' name='nombre' required onChange={(e)=>validarNombre(e.target.value)} />
        <label htmlFor="nombre" for="nombre" className='error'>{nombreError}</label>
    </div>
  )
}

export default FormNombre