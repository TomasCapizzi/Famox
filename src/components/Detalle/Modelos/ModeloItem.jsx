import React from 'react'

function ModeloItem({item}) {
  return (
    <article className='modelo'>
        {
          item.img && <img src={item.img} alt="modelo" loading='lazy'/>
        }
        <h5>{item.nombre}</h5>
        {
          item.uso && <p>{item.uso}</p>
        }
        {
          item.rango && <p>Rango: {item.rango}</p>
        }
        {
          item.modulos && 
          <div className='modulos'>
            <h4>Módulos</h4>
            <ul className='modulos-lista'>
              {
                item.modulos.map(
                  modulo => <li key={modulo}>{modulo}</li>
                )
              }
            </ul>
          </div>
        }
    </article>
  )
}

export default ModeloItem