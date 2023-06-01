import React from 'react'

function UnidSum({isIntersecting}) {
  return (
    <article className={isIntersecting ? 'tarea on' : 'tarea off'}>
        <p className='nro'>02</p>
        <div>
            <h2>Unidades de Suministro</h2>
            <p>Proyectamos, diseñamos y fabricamos Unidades de Suministro cuyo concepto principal es satisfacer las necesidades del profesional de la salud en cualquier tipo de servicio, mediante equipos tales como Paneles de Cabecera, Islas de Neonatología, Columnas de quirófano y Brazos suspendidos para Áreas Críticas.</p>
        </div>
    </article>
  )
}

export default UnidSum