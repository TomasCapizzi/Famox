import React from 'react';
import {TiDelete} from 'react-icons/ti';

function Longitud({longitudPanel, eliminarItem}) {

  return (
    <div className='seleccion-unidSum-longitud'>
        <p>Longitud: {longitudPanel}</p>
        <TiDelete onClick={eliminarItem}/>
    </div>
  )
}

export default Longitud