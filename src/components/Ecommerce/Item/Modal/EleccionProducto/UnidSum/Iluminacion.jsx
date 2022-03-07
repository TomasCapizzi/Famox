import React,{useRef} from 'react';

import IluminacionItem from './Items/IluminacionItem';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useSeleccionarOpcion from '../../../../../../hooks/ecommerce/useSeleccionarOpcion';

function Iluminacion({items}) {
  const opcionesRef = useRef();
    
  const {mostrarIluminacion, opcionesHandler, setOpcionesHandler} = useSeleccionarOpcion();

  function seleccionarElemento(e){
    setOpcionesHandler(!opcionesHandler)
    //setGas(id);
    mostrarIluminacion(opcionesRef);        
}

  return (
    <article className='modal-iluminacion'>
    <div className='encabezado'>
        <p>Iluminación</p>
        <MdKeyboardArrowDown onClick={()=> mostrarIluminacion(opcionesRef)} />
    </div>
    <article className='opciones' ref={opcionesRef}>
        <button>Confirmar</button>
        {
            items.map(
                item => <IluminacionItem item={item} key={item}/>
            )
        }
    </article>

</article>
  )
}

export default Iluminacion