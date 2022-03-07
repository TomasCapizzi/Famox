import React,{useRef} from 'react';

import {MdKeyboardArrowDown} from 'react-icons/md';
import MediaTensionItem from './Items/MediaTensionItem';
import useSeleccionarOpcion from '../../../../../../hooks/ecommerce/useSeleccionarOpcion';

function MediaTension({items}) {

    const opcionesRef = useRef();
    
    const {mostrarMediaTension, opcionesHandler, setOpcionesHandler} = useSeleccionarOpcion();

    function seleccionarElemento(e){
        setOpcionesHandler(!opcionesHandler)
        //setGas(id);
        mostrarMediaTension(opcionesRef);        
    }

  return (
    <article className='modal-mediatension'>
        <div className='encabezado'>
            <p>Media Tensión</p>
            <MdKeyboardArrowDown onClick={()=> mostrarMediaTension(opcionesRef)} />
        </div>
        <article className='opciones' ref={opcionesRef}>
            <button>Confirmar</button>
            {
                items.map(
                    item => <MediaTensionItem item={item} key={item}/>
                )
            }
        </article>

    </article>
  )
}

export default MediaTension