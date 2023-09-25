import Mails from './DatosContacto/Mails'
import React from 'react'
import Telefono from './DatosContacto/Telefono'

function Info() {

  return (
    <div className='info-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.922267850593!2d-58.50051841728875!3d-34.66245386936837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabb78736cbf%3A0x13fef67a0b5e4496!2sFamox!5e0!3m2!1ses-419!2sar!4v1644500484441!5m2!1ses-419!2sar" title='ubicacion' ></iframe>
        <div className='info'>
          <Telefono/>
          <Mails/>
        </div>
    </div>
  )
}

export default Info