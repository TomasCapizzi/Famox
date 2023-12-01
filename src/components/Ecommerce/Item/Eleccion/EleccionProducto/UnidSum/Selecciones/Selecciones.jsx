import React from 'react';
import {TiDelete} from 'react-icons/ti';

function Selecciones({valores, eliminarItem}) {

  return (
    valores.map(
      item => item.cantidad > 0 &&
        <div className='seleccion-unidSum' key={item.nombre}>
          <p>{item.nombre}</p>
          <p>Cantidad: {item.cantidad}</p>
          <TiDelete onClick={()=> eliminarItem(item)}/>
        </div>
      )
  )
}

export default Selecciones