import React from 'react';
import {TiDelete} from 'react-icons/ti';

function Selecciones({valores, eliminarItem}) {
  return (
        <>
      {
      valores.map(
        item => item.cantidad > 0 &&
        <div key={item.nombre} className='item'>
          <p>{item.cantidad}</p>
          <p>{item.nombre}</p>
          <TiDelete onClick={()=>eliminarItem(item)} />
        </div>
    )}
    </>

  )
}

export default Selecciones