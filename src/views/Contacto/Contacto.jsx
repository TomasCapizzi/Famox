import React,{useRef} from 'react';

import Form from 'components/Contacto/Form/Form';
import {Helmet} from 'react-helmet';
import Info from 'components/Contacto/Info/Info';
import Notificacion from 'components/Contacto/Notificacion';
import RedesSociales from 'components/RedesSociales/RedesSociales';
import useEnviarConsulta from 'hooks/contacto/useEnviarConsulta';
import useNotificacion from 'hooks/contacto/useNotificacion';
import useResetValores from 'hooks/contacto/useResetValores';

function Contacto() {

  const refNoti = useRef();
  const {resetValores} = useResetValores();
  const {mostrarNotificacion} = useNotificacion();
 // const {generarConsulta} = useEnviarConsulta();

  function enviarConsulta(e){
    e.preventDefault();
    // Enviar mail de contacto, de esta manera que lo hacemos no redirecciona a la API
    const consulta = {
      nombre:e.target.nombre.value,
      email: e.target.mail.value,
      pais: e.target.pais.value,
      asunto: e.target.asunto.value,
      empresa: e.target.empresa.value,
      mensaje: e.target.mensaje.value
    } // Crear hook para armar consulta en base a valores del form
    console.log(consulta);
    const request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(consulta),
    }
    fetch('https://famox-api.herokuapp.com/formulario/contacto', request); // Probar hook enviar consulta
    mostrarNotificacion(refNoti);
    resetValores(e);
}

  return (
    <section className='contacto'>
      <Helmet>
        <title>Contacto</title>
        <meta name="description" content="Nuestras vías de contacto, para responder cualquier consulta relacionada a nuestros servicios. ¡No dudes en escribirnos!" />
      </Helmet>
        <h1 id='titulo'>¡Contactanos!</h1>
        <div className='data'>
            <Form enviarConsulta={enviarConsulta}/>
            <Info/>
            <Notificacion refNoti={refNoti}/>
        </div>
        <RedesSociales/>
    </section>
  )
}

export default Contacto