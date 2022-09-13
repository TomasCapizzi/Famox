import React,{useRef} from 'react';

import {MdKeyboardArrowDown} from 'react-icons/md';
import MediaTensionItem from 'components/Ecommerce/Item/Modal/EleccionProducto/UnidSum/Opciones/MediaTension/MediaTensionItem';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesMediaTension from 'hooks/ecommerce/unidadSuministro/useOpcionesMediaTension';

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
        <div className='encabezado'>
            <p>Media Tensión</p>
            <MdKeyboardArrowDown onClick={()=> mostrarMediaTension(opcionesRef)} />
        </div>
        <article className='opciones' ref={opcionesRef}>
            <button onClick={()=> confirmarItems()}>
                Confirmar
            </button>
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