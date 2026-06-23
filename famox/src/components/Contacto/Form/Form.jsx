import useValidarFormContacto from 'hooks/forms/useValidarFormContacto';
import FormNombre from './FormNombre';
import FormEmpresa from './FormEmpresa';
import FormPais from './FormPais';
import FormCorreo from './FormCorreo';
import FormAsunto from './FormAsunto';
import FormMensaje from './FormMensaje';
import FormSubmit from './FormSubmit';
import { useTranslation } from 'react-i18next';


function Form({enviarConsulta}) {

  //const [captchaToken, setCaptchaToken] = useState('');
  const {t} = useTranslation()

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
    <form action="" method='POST' onSubmit={(e)=> enviarConsulta(e, e.target.extra_field.value)} >
      <p>{t("contacto.form.title")}</p>
      <FormNombre validarNombre={validarNombre} nombreError={nombreError} />
      <FormEmpresa validarEmpresa={validarEmpresa} empresaError={empresaError} />
      <FormPais/>
      <FormCorreo validarEmail={validarEmail} mailError={mailError}/>
      <FormAsunto validarAsunto={validarAsunto} asuntoError={asuntoError}/>
      <FormMensaje validarMensaje={validarMensaje} mensajeError={mensajeError}/>
      <input
        type="text"
        id="extra_field"
        name="extra_field"
        autoComplete="off"
        tabIndex="-1"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      />
      <FormSubmit handlerSubmit={handlerSubmit}/>
    </form>
  )
}

export default Form