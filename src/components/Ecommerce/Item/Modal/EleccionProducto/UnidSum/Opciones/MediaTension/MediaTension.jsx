import React,{useRef} from 'react';

import MediaTensionItem from 'components/Ecommerce/Item/Modal/EleccionProducto/UnidSum/Opciones/MediaTension/MediaTensionItem';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesMediaTension from 'hooks/ecommerce/unidadSuministro/useOpcionesMediaTension';
import EncabezadoOpciones from '../../../EncabezadoOpciones';

function MediaTension({items, valoresMediaTension,setValoresMediaTension }) {

    const opcionesRef = useRef();
    const {mostrarMediaTension, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
    const {obtenerCantidadInput} = useOpcionesMediaTension(setValoresMediaTension, valoresMediaTension);

    function confirmarItems(e){
        setOpcionesHandler(!opcionesHandler)
        mostrarMediaTension(opcionesRef);     
    }    

  return (
    <article className='modal-mediatension'>
        <EncabezadoOpciones titulo="Media Tensión" mostrarOpcion={mostrarMediaTension} opcionesRef={opcionesRef}/>
        <article className='opciones' ref={opcionesRef}>
            <button onClick={()=> confirmarItems()}>Confirmar</button>
            {
                items.map(
                    item => <MediaTensionItem item={item} key={item} obtenerCantidadInput={obtenerCantidadInput}/>
                )
            }
        </article>
    </article>
  )
}

export default MediaTension