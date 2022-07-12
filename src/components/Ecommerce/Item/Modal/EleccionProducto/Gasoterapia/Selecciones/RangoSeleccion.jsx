import React from 'react';
import {TiDelete} from 'react-icons/ti';

function RangoSeleccion({rango, eliminarSeleccionRango}) {
  return (
    <div className='seleccionado'>
        <p>Rango: {rango}</p>
        <button><TiDelete onClick={eliminarSeleccionRango} /></button>
    </div>
  )
}

export default RangoSeleccion