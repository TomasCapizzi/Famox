import GASES from 'data/gases';
import React from 'react';
import {TiDelete} from 'react-icons/ti';

function GasSeleccion({gas, eliminarSeleccionGas, gases}) {

  return (
    GASES.map(
        item => item.nombre === gas ? 
            <div key={item.nombre} className='seleccionado' >
            <img src={item.img} alt={item.nombre} />
            <p>{item.nombre}</p>
            {
              gases.length > 1 ? <button><TiDelete onClick={eliminarSeleccionGas} /></button> : null
            }
            </div>
        : null
    )
  )
}

export default GasSeleccion