import Item from './Item'
import React from 'react'

function Modelos({item, setModelo}) {

  
  function seleccionarElemento(id){
    setModelo(id)
  }

  return (
    <article className='modal-modelos-container'>
        <h3>Modelos</h3>
        <table className='contenedor'>
          <thead>
            <tr className='table-head'>
              <th>Imagen</th>
              <th>Código</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {
              item.modelos_.map(
                  modelo => <Item key={modelo._id} modelo={modelo} seleccionarElemento={seleccionarElemento} />
              )            
            }
          </tbody>
        </table>
    </article>
  )
}

export default Modelos
