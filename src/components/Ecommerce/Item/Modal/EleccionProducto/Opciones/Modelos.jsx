import ModeloItem from './ModeloItem'
import React from 'react'

function Modelos({item, setModelo}) {

  
  function seleccionarElemento(id){
    setModelo(id)
  }

  return (
    <article className='modal-modelos-container'>
        <h3>Modelos</h3>
        <div className='contenedor'>
        {
            item.modelos_.map(
                modelo => <ModeloItem key={modelo._id} modelo={modelo} seleccionarElemento={seleccionarElemento} />
            )            
        }
        </div>

    </article>
  )
}

export default Modelos
//