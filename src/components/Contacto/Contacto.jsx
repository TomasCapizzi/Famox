import React,{useRef} from 'react'

import Form from './Form/Form'
import Info from './Info/Info'
import Notificacion from './Notificacion'
import RedesSociales from '../RedesSociales/RedesSociales'

function Contacto() {

  const refNoti = useRef()

  function mostrarNotificacion(){
    refNoti.current.classList.toggle('on')
    setTimeout(() => {
      refNoti.current.classList.toggle('on')
  }, 4000);
  }
  return (
    <section className='contacto'>
        <h1>¡Contactanos!</h1>
        <div className='data'>
            <Form mostrarNotificacion={mostrarNotificacion}/>
            <Info/>
            <Notificacion refNoti={refNoti}/>
        </div>
        <RedesSociales/>
    </section>
  )
}

export default Contacto