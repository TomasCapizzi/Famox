import FotoSlider from './FotoSlider'
import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection'

function Obra({obra}) {

  const {isIntersecting, elementRef} = useIntersection({})

  return (
    <article className={isIntersecting ? 'obra in' : 'obra out'} ref={elementRef}>
      <div className='obra-descrip'>
        <h3>{obra.obra}</h3>
        <p>Fecha: {obra.fecha}</p>
      </div>
      {//      <img src={obra.img} alt="Obra" />
      }
      <FotoSlider obra={obra} />
      <h5>Instalación</h5>
      <ul>
        {
            obra.instalacion.map(
                inst => <li key={inst}>{inst}</li>
            )
        }
      </ul>

    </article>
  )
}

export default Obra