import React from 'react'

function NotificacionAgregadoModelo({refNotificacionModelo}) {
  return (
    <div className='notificacion' ref={refNotificacionModelo}>
        <p>Modelo seleccionado</p>
    </div>
  )
}

export default NotificacionAgregadoModelo