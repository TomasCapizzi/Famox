import React from 'react'

function Instalaciones({isIntersecting}) {
  return (
    <div className={isIntersecting ? 'tarea on' : 'tarea off'}>
        <p className='nro'>04</p>
        <div>
            <h2>Instalaciones</h2>
            <p>Diseñamos y ejecutamos tendidos para gases médicos bajo las normativas vigentes y pensando en su uso y aplicación,  consideramos esencial un diseño que alcance las necesidades de las instituciones de la salud antes las más severas y críticas condiciones de requerimiento.</p>
        </div>
    </div>
  )
}

export default Instalaciones