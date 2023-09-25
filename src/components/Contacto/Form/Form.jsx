import React from 'react';
import useValidarFormContacto from 'hooks/forms/useValidarFormContacto';
import FormNombre from './FormNombre';
import FormEmpresa from './FormEmpresa';
import FormPais from './FormPais';
import FormCorreo from './FormCorreo';
import FormAsunto from './FormAsunto';
import FormMensaje from './FormMensaje';
import FormSubmit from './FormSubmit';

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
      <FormNombre validarNombre={validarNombre} nombreError={nombreError} />
      <FormEmpresa validarEmpresa={validarEmpresa} empresaError={empresaError} />
      <FormPais/>
      <FormCorreo validarEmail={validarEmail} mailError={mailError}/>
      <FormAsunto validarAsunto={validarAsunto} asuntoError={asuntoError}/>
      <FormMensaje validarMensaje={validarMensaje} mensajeError={mensajeError}/>
      <FormSubmit handlerSubmit={handlerSubmit}/>
    </form>
  )
}

export default Form