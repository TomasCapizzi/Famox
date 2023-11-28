import React from 'react';
import {FaPlusCircle} from 'react-icons/fa';

function ModeloItem({modelo, seleccionarElemento}) {

  return (
    <>
    <div className='modal-modelo' onClick={()=> seleccionarElemento(modelo)}>
      <img src={modelo.img} alt="modelo" />
      <div>
        <h5 className={modelo.img ? '' : 'btn' }>{modelo.nombre}</h5>
        <p>{modelo.rango? `${modelo.uso}, ${modelo.rango}` : modelo.uso}</p>
      </div>
      <FaPlusCircle/>
    </div>
    </>
  )
}

export default ModeloItem
