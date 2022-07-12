import React from 'react'
import {TiDelete} from 'react-icons/ti';

function Conexiones({conexiones, eliminarItem}) {
  return (
    <tbody className='container'>
        {
            conexiones.map(
                item => 
                <tr key={`${item.conector + item.gas}`} className='item-conex' >
                    <td>{item.conector}</td>
                    <td>{item.gas}</td>
                    <td>{item.cantidad}</td>
                    <td><TiDelete onClick={()=> eliminarItem(item)}/></td>
                </tr>
            )
        }
    </tbody>
  )
}

export default Conexiones