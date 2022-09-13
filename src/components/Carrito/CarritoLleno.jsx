import React from 'react'
import Tabla from './Tabla'

function CarritoLleno({carro, formHandler, habilitarForm}) {
  return (
    <article className='carro-lleno'>
        <Tabla carro={carro} />
        {formHandler ? null : <button onClick={habilitarForm}>Pedir Cotización</button> }
    </article>
  )
}

export default CarritoLleno