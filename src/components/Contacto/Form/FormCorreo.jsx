import React from 'react'

function FormCorreo({validarEmail, mailError}) {
  return (
    <div>
        <label htmlFor="mail">Correo Electrónico*</label>
        <input type="email"  id='mail' name='email' required onChange={(e)=>validarEmail(e.target.value)} />
        <label htmlFor="email" className='error'>{mailError}</label>
    </div>
  )
}

export default FormCorreo