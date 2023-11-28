import React from 'react';
import {TiDelete} from 'react-icons/ti';

function SeleccionContainer({modelo, eliminarSeleccion}) {
  return (
    <div className='selecciones'>
        <p>Tu Selección</p>
        <div className='selecciones-container'>
          <div className='seleccionado'>
            <p>{modelo.nombre}</p>
            <button><TiDelete onClick={eliminarSeleccion} /></button>
          </div>
        </div>
    </div>
  )
}

export default SeleccionContainer