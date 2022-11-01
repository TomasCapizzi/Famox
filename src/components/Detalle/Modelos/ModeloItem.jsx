import React from 'react'

function ModeloItem({item}) {
  return (
    <article className='modelo-item'>
        <h3>{item.nombre}</h3>
        {
          item.img && 
          <div className='img-container'>
              <img src={item.img} alt="modelo" />
          </div>
        }
        {
          item.uso && <p>{item.uso}</p>
        }
        {
          item.rango && <p>{item.rango}</p>
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