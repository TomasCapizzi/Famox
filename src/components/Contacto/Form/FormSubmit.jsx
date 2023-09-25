import React from 'react'

function FormSubmit({handlerSubmit}) {
  return (
    <div className={handlerSubmit? '': 'disabled'}>
        <input type='submit' value='Enviar'  className='submit'/>
    </div>
  )
}

export default FormSubmit