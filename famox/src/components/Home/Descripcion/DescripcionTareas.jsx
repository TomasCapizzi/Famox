import Calidad from './Tareas/Calidad'
import Gasoterapia from './Tareas/Gasoterapia'
import Instalaciones from './Tareas/Instalaciones'
import React from 'react'
import UnidSum from './Tareas/UnidSum'
import useIntersection from 'hooks/intersectionObserver/useIntersection'

function DescripcionTareas() {

  const {isIntersecting, elementRef} = useIntersection({threshold: '0.2'})

  return (
    <div className='tareas-container' ref={elementRef}>
        <Gasoterapia isIntersecting={isIntersecting} />
        <UnidSum isIntersecting={isIntersecting}/>
        <Calidad isIntersecting={isIntersecting} />
        <Instalaciones isIntersecting={isIntersecting} />
    </div>
  )
}

export default DescripcionTareas