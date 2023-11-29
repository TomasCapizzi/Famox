import React from 'react';
import {FaPlusCircle} from 'react-icons/fa';

function Modelo({item, agregarEquipoDigital}) {
  return (
    <div className='modelo' onClick={()=> agregarEquipoDigital(item)}>
      <p>{item.nombre}</p>     
      <button><FaPlusCircle/></button>
    </div>
  )
}

export default Modelo