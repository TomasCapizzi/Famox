import { useState } from "react";

const useValidarFormContacto = () => {
    const [nombreError, setNombreError] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const [mailError, setMailError] = useState('');
    const [asuntoError, setAsuntoError] = useState('');
    const [empresaError, setEmpresaError] = useState('');

    const [handlerNombre, setHandlerNombre] = useState(false);
    const [handlerMensaje, setHandlerMensaje] = useState(false);
    const [handlerMail, setHandlerMail] = useState(false);
    const [handlerAsunto, setHandlerAsunto] = useState(false);
    const [handlerEmpresa, setHandlerEmpresa] = useState(false);

    const [handlerSubmit, setHandlerSubmit] = useState(false);


    const validarNombre = (value)=> {
        if(value.length <= 2){
          setHandlerNombre(false);
          setNombreError('Este campo debe estar completo');
          setHandlerSubmit(false);          
          //checkSubmit();  
        } else{
          setNombreError('');
          setHandlerNombre(true);
          if(handlerEmpresa && handlerMail && handlerAsunto && handlerMensaje){
            setHandlerSubmit(true);
          }
          //checkSubmit();
        }
        //checkSubmit();        
    }

    const validarEmpresa = (value)=> {
      if(value.length <= 2){
        setEmpresaError('Este campo debe estar completo');
        setHandlerEmpresa(false);
        setHandlerSubmit(false);
      } else{
        setEmpresaError('');
        setHandlerEmpresa(true);
        if(handlerNombre && handlerMail && handlerAsunto && handlerMensaje){
          setHandlerSubmit(true);
        }
      }
      //checkSubmit();
    }


    const validarAsunto = (value)=>{
      if(value.length <= 2){
        setAsuntoError('Este campo debe estar completo');
        setHandlerAsunto(false);
        setHandlerSubmit(false);
      } else{
        setAsuntoError('');
        setHandlerAsunto(true);
        if(handlerEmpresa && handlerMail && handlerNombre && handlerMensaje){
          setHandlerSubmit(true);
        }
      }
      //checkSubmit()
    }

    const validarEmail = (value)=> {
      const formatoEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
      if(formatoEmail.test(value)){
       setMailError('');
       setHandlerMail(true);
       if(handlerEmpresa && handlerNombre && handlerAsunto && handlerMensaje){
        setHandlerSubmit(true);
      }
       //checkSubmit();
      } else{
        setMailError('Mail inválido');
        setHandlerMail(false);
        setHandlerSubmit(false);
        //checkSubmit();
      }
      //checkSubmit();
    }

    const validarMensaje = (value)=> {
      if(value.length < 5){
        setHandlerMensaje(false);
        setMensajeError('Este campo debe tener al menos 5 caracteres');
        setHandlerSubmit(false);
        //checkSubmit();
      } else{
        setHandlerMensaje(true);
        setMensajeError('');
        if(handlerEmpresa && handlerMail && handlerAsunto && handlerNombre){
          setHandlerSubmit(true);
        }
        //checkSubmit();
      }
      //checkSubmit();
    }

    const reiniciarValores = ()=> {
      setHandlerSubmit(false);
      setHandlerAsunto(false);
      setHandlerEmpresa(false);
      setHandlerMail(false);
      setHandlerMensaje(false);
      setHandlerNombre(false);
    }


  return {
    validarNombre,
    validarEmpresa,
    validarAsunto,
    validarEmail,
    validarMensaje,
    nombreError,
    mensajeError,
    mailError,
    asuntoError,
    empresaError,
    handlerSubmit,
    setHandlerSubmit,
    reiniciarValores
  }
}

export default useValidarFormContacto