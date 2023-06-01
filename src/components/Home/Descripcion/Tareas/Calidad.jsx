import React from 'react'

function Calidad({isIntersecting}) {
  return (
    <div className={isIntersecting ? 'tarea on' : 'tarea off'}>
        <p className='nro'>03</p>
        <div>
            <h2>Calidad</h2>
            <p>Aplicamos la mejora continua y capacitación a nuestro personal, para lograr a través de su participación, su compromiso con el Sistema de Gestión de Calidad.</p>
        </div>
    </div>
  )
}

export default Calidad