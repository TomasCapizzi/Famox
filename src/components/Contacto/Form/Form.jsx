import React from 'react';
import useValidarFormContacto from 'hooks/forms/useValidarFormContacto';

function Form({enviarConsulta}) {

  const {
    validarNombre, 
    validarMensaje, 
    validarEmail, 
    validarAsunto, 
    validarEmpresa, 
    nombreError, 
    mailError, 
    mensajeError, 
    asuntoError, 
    empresaError,
    handlerSubmit,
  } = useValidarFormContacto(); // Hook de validación
    
  return (
    <form action="" method='POST' onSubmit={(e)=> enviarConsulta(e)} >
      <p>Díganos lo que necesita y nos pondremos en contacto con usted.</p>
    <div>
      <label htmlFor="">Nombre*</label>
      <input type="text" id='nombre' name='nombre' required onChange={(e)=>validarNombre(e.target.value)} />
      <label htmlFor="nombre" className='error'>{nombreError}</label>
    </div>

    <div>
      <label htmlFor="">Empresa/Hospital*</label>
      <input type="text" id='empresa' name='empresa' required onChange={(e)=>validarEmpresa(e.target.value)} />
      <label htmlFor="empresa" className='error'>{empresaError}</label>
    </div>

    <div>
      <label htmlFor="">País</label>
      <input type="text" id='pais' name='pais' required />
    </div>

    <div>
      <label htmlFor="">Correo Electrónico*</label>
      <input type="email"  id='mail' name='email' required onChange={(e)=>validarEmail(e.target.value)} />
      <label htmlFor="email" className='error'>{mailError}</label>
    </div>

    <div>
      <label htmlFor="">Asunto*</label>
      <input type="text"  id='asunto' name='asunto' required onChange={(e)=>validarAsunto(e.target.value)} />
      <label htmlFor="asunto" className='error'>{asuntoError}</label>
    </div>

    <div>
      <label htmlFor="">Mensaje*</label>
      <textarea name="mensaje" id="mensaje" required onChange={(e)=>validarMensaje(e.target.value)}></textarea>
      <label htmlFor="mensaje" className='error'>{mensajeError}</label>
    </div>

    <div className={handlerSubmit? '': 'disabled'}>
      <input type='submit' value='Enviar'  className='submit'/>
    </div>
    
    </form>
  )
}

export default Form