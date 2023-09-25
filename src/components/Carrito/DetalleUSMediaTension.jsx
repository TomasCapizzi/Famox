import React from 'react'

function DetalleUSMediaTension({item}) {
  return (
    <td className='filter'>
        <h5>Media Tension</h5>
        <ul>
            {
                item.mediaTension.map(
                    item => 
                        <li className='propiedad'  key={item.nombre}>{item.nombre} Cantidad: {item.cantidad}</li>
                )
            }
        </ul>
    </td>
  )
}

export default DetalleUSMediaTension