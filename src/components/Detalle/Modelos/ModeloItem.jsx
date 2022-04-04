import React from 'react'

function ModeloItem({item}) {
  return (
    <article className='modelo-item'>
        <h3>{item.nombre}</h3>
        {
          item.img && 
          <div>
              <img src={item.img} alt="modelo" />
          </div>
        }
        {
          item.uso && <p>{item.uso}</p>
        }
        {
          item.rango && <p>{item.rango}</p>
        }
    </article>
  )
}

export default ModeloItem