import React,{useRef} from 'react';

import BajaTensionItem from 'components/Ecommerce/Item/Modal/EleccionProducto/UnidSum/Opciones/BajaTension/BajaTensionItem';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesBajatension from 'hooks/ecommerce/unidadSuministro/useOpcionesBajaTension';
import EncabezadoOpciones from '../../../EncabezadoOpciones';

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
      <EncabezadoOpciones titulo="Baja Tensión" mostrarOpcion={mostrarBajaTension} opcionesRef={opcionesRef}/>
      <article className='opciones' ref={opcionesRef}>
            <button onClick={()=> confirmarItems()}>Confirmar</button>
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