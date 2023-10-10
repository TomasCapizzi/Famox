import React from 'react'

function FormAsunto({validarAsunto, asuntoError}) {
  return (
    <div>
        <label htmlFor="asunto" for="asunto">Asunto*</label>
        <input type="text"  id='asunto' name='asunto' required onChange={(e)=>validarAsunto(e.target.value)} />
        <label htmlFor="asunto" for="asunto" className='error'>{asuntoError}</label>
    </div>
  )
}

export default FormAsunto