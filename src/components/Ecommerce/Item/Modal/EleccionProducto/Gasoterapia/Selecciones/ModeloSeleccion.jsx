import React from 'react';
import {TiDelete} from 'react-icons/ti';

function ModeloSeleccion({nombre, eliminarSeleccionModelo}) {
  return (
    <div className='seleccionado modelo'>
        <p>{nombre}</p>
        <button><TiDelete onClick={eliminarSeleccionModelo} /></button>
    </div>
  )
}

export default ModeloSeleccion