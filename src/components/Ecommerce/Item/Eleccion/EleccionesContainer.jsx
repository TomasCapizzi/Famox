import React,{useRef} from 'react'

import EleccionAccesorio from './EleccionProducto/Accesorios/EleccionAccesorio';
import EleccionGasoterapia from './EleccionProducto/Gasoterapia/EleccionGasoterapia';
import EleccionUnidSum from './EleccionProducto/UnidSum/EleccionUnidSum';
import EleccionEquipoDigital from './EleccionProducto/EquiposDigitales/EleccionEquipoDigital';

function EleccionesContainer({item}) {
  const containerModalRef = useRef();
  const modalWinwowRef = useRef()
  return (
    <section className='elecciones-container' ref={containerModalRef}>
      <article className='elecciones' ref={modalWinwowRef}>
        {
          item.gasoterapia ? <EleccionGasoterapia item={item}/> :  item.accesorio ? <EleccionAccesorio item={item}/> : item.equipoDigital ? <EleccionEquipoDigital item={item}/> : <EleccionUnidSum item={item}/>
        }
      </article>      
    </section>
  )
}

export default EleccionesContainer;