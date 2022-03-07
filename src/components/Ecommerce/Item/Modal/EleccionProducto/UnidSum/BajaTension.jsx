import React,{useRef} from 'react';

import BajaTensionItem from './Items/BajaTensionItem';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useSeleccionarOpcion from '../../../../../../hooks/ecommerce/useSeleccionarOpcion';

function BajaTension({items}) {

  const opcionesRef = useRef();
    
  const {mostrarBajaTension, opcionesHandler, setOpcionesHandler} = useSeleccionarOpcion();

  function seleccionarElemento(e){
      setOpcionesHandler(!opcionesHandler)
      //setGas(id);
      mostrarBajaTension(opcionesRef);        
  }

return (
  <article className='modal-bajatension'>
      <div className='encabezado'>
          <p>Baja Tensión</p>
          <MdKeyboardArrowDown onClick={()=> mostrarBajaTension(opcionesRef)} />
      </div>
      <article className='opciones' ref={opcionesRef}>
          <button>Confirmar</button>
          {
              items.map(
                  item => <BajaTensionItem item={item} key={item}/>
              )
          }
      </article>

  </article>
)
}

export default BajaTension

//<BajaTensionItem item={item} key={item}/>