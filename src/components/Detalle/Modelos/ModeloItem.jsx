import React from 'react'

function ModeloItem({item}) {
  return (
    <article className='modelo-item'>
        <h3>{item.nombre}</h3>
        <div>
            <img src={item.img} alt="modelo" />
        </div>
        <p>{item.uso}</p>
        <p>{item.rango}</p>
    </article>
  )
}

export default ModeloItem