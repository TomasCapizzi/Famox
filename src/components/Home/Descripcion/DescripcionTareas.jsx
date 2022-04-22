import Calidad from './Tareas/Calidad'
import Gasoterapia from './Tareas/Gasoterapia'
import Instalaciones from './Tareas/Instalaciones'
import React from 'react'
import UnidSum from './Tareas/UnidSum'

function DescripcionTareas() {
  return (
    <div className='tareas-container'>
        <Gasoterapia/>
        <UnidSum/>
        <Calidad/>
        <Instalaciones/>
    </div>
  )
}

export default DescripcionTareas