import FotoSlider from './FotoSlider'
import React from 'react'

function Obra({obra}) {
  return (
    <article className='obra'>
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