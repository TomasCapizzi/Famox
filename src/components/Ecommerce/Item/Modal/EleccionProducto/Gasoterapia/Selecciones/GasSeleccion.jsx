import GASES from 'data/gases';
import React from 'react';
import {TiDelete} from 'react-icons/ti';

function GasSeleccion({gas, eliminarSeleccionGas}) {
  return (
    GASES.map(
        item => item.nombre === gas ? 
            <div key={item.nombre} className='seleccionado' >
            <img src={item.img} alt={item.nombre} />
            <p>{item.nombre}</p>
            <button><TiDelete onClick={eliminarSeleccionGas} /></button>
            </div>
        : null
    )
  )
}

export default GasSeleccion