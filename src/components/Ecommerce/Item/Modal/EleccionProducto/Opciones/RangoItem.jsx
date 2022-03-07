import React, {useRef} from 'react'

function RangoItem({rango, seleccionarElemento}) {
  const divRef = useRef();
  return (
    <div ref={divRef} className='rango' onClick={(e)=>seleccionarElemento(e, rango.rango)}  > 
      <p>{rango.rango}</p>
    </div>
  )
}

export default RangoItem