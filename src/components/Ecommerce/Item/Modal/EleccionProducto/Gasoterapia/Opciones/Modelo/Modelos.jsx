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
          <tr className='table-head'>
            <th>Imagen</th>
            <th>Código</th>
            <th>Descripción</th>
          </tr>
          {
            item.modelos_.map(
                modelo => <Item key={modelo._id} modelo={modelo} seleccionarElemento={seleccionarElemento} />
            )            
          }
        </table>
    </article>
  )
}

export default Modelos
