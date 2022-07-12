import React from 'react'

function Info() {

  return (
    <div className='info-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.922267850593!2d-58.50051841728875!3d-34.66245386936837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabb78736cbf%3A0x13fef67a0b5e4496!2sFamox!5e0!3m2!1ses-419!2sar!4v1644500484441!5m2!1ses-419!2sar" title='ubicacion' ></iframe>
        <div className='info'>
            <div>
                <h3>Teléfono</h3>
                <p>4687-8417//6073-6020</p>
                <p>+54 9 11 3427-6306</p>
            </div>
            <div>
                <h3>Ventas</h3>
                <p>ventas@famox.com.ar</p>
            </div>
            <div>
                <h3>Atención al Cliente</h3>
                <p>atencion.cliente@famox.com.ar</p>
            </div>
            <div>
                <h3>Administración</h3>
                <p>info@famox.com.ar</p>
            </div>
        </div>
    </div>
  )
}

export default Info