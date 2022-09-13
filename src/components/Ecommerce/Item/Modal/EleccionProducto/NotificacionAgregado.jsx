import React from 'react'

function NotificacionAgregado({refNoti}) {

  return (
    <div className='notificacion' ref={refNoti}>
        <p>Item seleccionado</p>
    </div>
  )
}

export default NotificacionAgregado