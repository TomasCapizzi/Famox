import React, {useRef} from 'react'
import {FaPlusCircle} from 'react-icons/fa';


function RangoItem({rango, seleccionarElemento}) {
  const divRef = useRef();
  return (
    <div ref={divRef} className='rango' onClick={(e)=>seleccionarElemento(e, rango.rango)}  > 
      <p>{rango.rango}</p>
      <FaPlusCircle/>
    </div>
  )
}

export default RangoItem