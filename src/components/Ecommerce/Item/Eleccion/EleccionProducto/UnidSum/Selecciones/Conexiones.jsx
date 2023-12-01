import React from 'react'
import {TiDelete} from 'react-icons/ti';

function Conexiones({conexiones, eliminarItem}) {

  return (
      conexiones.map(
          item => 
            <div className='seleccion-unidSum' key={`${item.conector}${item.gas}`}>
                <p>Conector: {item.conector}</p>
                <p>Gas: {item.gas}</p>
                <p>Cantidad: {item.cantidad}</p>
                <TiDelete onClick={()=> eliminarItem(item)}/>
            </div>
      )
  )
}

export default Conexiones