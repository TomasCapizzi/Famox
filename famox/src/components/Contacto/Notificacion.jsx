import React from 'react'

const Notificacion = ({refNoti}) => {
  return (
    <div className='toast' ref={refNoti}>
        <p>Email enviado! Chequea la carpeta de Spam si no logras visualizarlo</p>
    </div>
  )
}

export default Notificacion