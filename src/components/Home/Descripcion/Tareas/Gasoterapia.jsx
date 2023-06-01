import React from 'react'

function Gasoterapia({isIntersecting}) {
  return (
    <article className={isIntersecting ? 'tarea on' : 'tarea off'}>
        <p className='nro'>01</p>
        <div>
            <h2>Gasoterapia</h2>
            <p>Son equipos destinados al control y regulación de los gases medicinales en puntos de conexión. Reguladores de presión, reductores de presión, mezclador de gases, reguladores de caudal, etc.</p>
        </div>

    </article>
  )
}

export default Gasoterapia