import React from 'react'

function DetalleUSConexiones({item}) {
  return (
    <td className='filter'>
        <h5>Conexiones</h5>
        <ul>
            {
                item.conexiones.map(
                    item => 
                        <li className='propiedad'  key={item.conector + item.gas}>{item.conector}+{item.gas} Cantidad: {item.cantidad}</li>
                )
            }
        </ul>
    </td>
  )
}

export default DetalleUSConexiones