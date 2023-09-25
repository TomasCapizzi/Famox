import React from 'react'

function DetalleUSBajaTension({item}) {
  return (
    <td className='filter'>
        <h5>Baja Tension</h5>
        <ul>
            {
                item.bajaTension.map(
                    item => 
                        <li className='propiedad'  key={item.nombre}>{item.nombre} Cantidad: {item.cantidad}</li>
                )
            }
        </ul>
    </td>
  )
}

export default DetalleUSBajaTension