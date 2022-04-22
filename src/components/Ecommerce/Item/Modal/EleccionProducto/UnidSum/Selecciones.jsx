import React from 'react';
import {TiDelete} from 'react-icons/ti';

function Selecciones({valores, eliminarItem}) {
  return (
        <tbody className='container'>
      {
      valores.map(
        item => item.cantidad > 0 &&
        <tr key={item.nombre} className='item'>
          <td>{item.nombre}</td>
          <td>{item.cantidad}</td>
          <td><TiDelete onClick={()=>eliminarItem(item)} /></td>
        </tr>
    )}
    </tbody>

  )
}

export default Selecciones