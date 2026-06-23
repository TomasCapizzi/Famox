import CONECTORES from 'data/conectores'
import React from 'react';
import {TiDelete} from 'react-icons/ti';

function ConectorSeleccion({conector, eliminarSeleccionConector}) {
  return (
    CONECTORES.map(
        item => item.nombre === conector ? 
          <div key={item.nombre} className='seleccionado'>
            <img src={item.img} alt={item.nombre} />
            <p>{item.nombre}</p>
            <button><TiDelete onClick={eliminarSeleccionConector} /></button>
          </div>
        : null
      )
  )
}

export default ConectorSeleccion