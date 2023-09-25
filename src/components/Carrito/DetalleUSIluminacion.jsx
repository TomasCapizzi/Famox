import React from 'react'

function DetalleUSIluminacion({item}) {
  return (
    <td className='filter'>
        <h5>Iluminación</h5>
        <ul>
            {
                item.iluminacion.map(
                    item =>
                        <li className='propiedad'  key={item.nombre}>{item.nombre} Cantidad: {item.cantidad}</li>
                )
            }
        </ul>
    </td>
  )
}

export default DetalleUSIluminacion