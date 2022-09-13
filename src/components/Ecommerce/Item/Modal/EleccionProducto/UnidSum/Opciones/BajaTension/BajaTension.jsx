import React,{useRef} from 'react';

import BajaTensionItem from 'components/Ecommerce/Item/Modal/EleccionProducto/UnidSum/Opciones/BajaTension/BajaTensionItem';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesBajatension from 'hooks/ecommerce/unidadSuministro/useOpcionesBajaTension';

function BajaTension({items, valoresBajaTension , setValoresBajaTension}) {
  const opcionesRef = useRef();    
  const {mostrarBajaTension, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
  const {obtenerCantidadInput} = useOpcionesBajatension(valoresBajaTension, setValoresBajaTension);

  function confirmarItems(e){
    setOpcionesHandler(!opcionesHandler)
    mostrarBajaTension(opcionesRef);     
}

return (
  <article className='modal-bajatension'>
      <div className='encabezado'>
          <p>Baja Tensión</p>
          <MdKeyboardArrowDown onClick={()=> mostrarBajaTension(opcionesRef)} />
      </div>
      <article className='opciones' ref={opcionesRef}>
            <button onClick={()=> confirmarItems()}>
                Confirmar
            </button>
            {
                items.map(
                    item => <BajaTensionItem item={item} key={item} obtenerCantidadInput={obtenerCantidadInput}/>
                )
            }
        </article>

  </article>
)
}

export default BajaTension

//<BajaTensionItem item={item} key={item}/>