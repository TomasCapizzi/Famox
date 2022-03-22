import React from 'react'
import {TiDelete} from 'react-icons/ti';

function Conexiones({conexiones, eliminarItem}) {
  return (
    <article className='container'>
        {
            conexiones.map(
                item => 
                <div key={`${item.conector + item.gas}`} className='item-conex' >
                    <p>{item.conector}</p>
                    <p>{item.gas}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <TiDelete onClick={()=> eliminarItem(item)}/>
                </div>
            )
        }
    </article>
  )
}

export default Conexiones