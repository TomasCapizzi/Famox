import React,{useRef} from 'react';

import Form from 'components/Contacto/Form/Form';
import Info from 'components/Contacto/Info/Info';
import Notificacion from 'components/Contacto/Notificacion';
import RedesSociales from 'components/RedesSociales/RedesSociales';
import useResetValores from 'hooks/contacto/useResetValores';

function Contacto() {

  const refNoti = useRef();
  const {resetValores} = useResetValores()

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
    }
    console.log(consulta);
    const request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(consulta),
    }
    fetch('https://famox-api.herokuapp.com/formulario/contacto', request);
    mostrarNotificacion();
    resetValores(e);
}


function mostrarNotificacion(){
  refNoti.current.classList.toggle('on');
  setTimeout(() => {
    refNoti.current.classList.toggle('on');
}, 4000);
}

  return (
    <section className='contacto'>
        <h1 id='titulo'>┬íContactanos!</h1>
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