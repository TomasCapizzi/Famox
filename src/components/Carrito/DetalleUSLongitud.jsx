import React from 'react'

function DetalleUSLongitud({item}) {
  return (
    <td className='filter'>
        <h5>Longitud</h5>
        <p>{item.longitud}</p>
    </td>
  )
}

export default DetalleUSLongitud