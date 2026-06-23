import {useState} from 'react'

const useValidarFormCotizacion = () => {

    const [nombreError, setNombreError] = useState('');
    const [mailError, setMailError] = useState('');
    const [empresaError, setEmpresaError] = useState('');

    const [handlerNombre, setHandlerNombre] = useState(false);
    const [handlerMail, setHandlerMail] = useState(false);
    const [handlerEmpresa, setHandlerEmpresa] = useState(false);

    const [handlerSubmit, setHandlerSubmit] = useState(false);


    const validarNombre = (value)=>{
        if(value.length <= 2){
            setHandlerNombre(false);
            setNombreError('Este campo debe estar completo');
            setHandlerSubmit(false);          
          } else{
            setNombreError('');
            setHandlerNombre(true);
            if(handlerEmpresa && handlerMail){
              setHandlerSubmit(true);
            }
          }
    }
    const validarEmpresa = (value)=>{
        if(value.length <= 2){
            setEmpresaError('Este campo debe estar completo');
            setHandlerEmpresa(false);
            setHandlerSubmit(false);
          } else{
            setEmpresaError('');
            setHandlerEmpresa(true);
            if(handlerNombre && handlerMail){
              setHandlerSubmit(true);
            }
          }
    }
    const validarMail = (value)=>{
        const formatoEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(formatoEmail.test(value)){
         setMailError('');
         setHandlerMail(true);
         if(handlerEmpresa && handlerNombre){
          setHandlerSubmit(true);
        }
        } else{
          setMailError('Mail inválido');
          setHandlerMail(false);
          setHandlerSubmit(false);
        }
    }

    const reiniciarValores = ()=> {
        setHandlerSubmit(false);
        setHandlerEmpresa(false);
        setHandlerMail(false);
        setHandlerNombre(false);
      }

  return {
    validarNombre,
    validarEmpresa,
    validarMail,
    mailError,
    empresaError,
    nombreError,
    handlerSubmit,
    setHandlerSubmit,
    reiniciarValores
  }
}

export default useValidarFormCotizacion