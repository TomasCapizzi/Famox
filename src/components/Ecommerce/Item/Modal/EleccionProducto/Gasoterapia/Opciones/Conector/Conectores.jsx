import React, {useRef} from 'react';

import CONECTORES from 'data/conectores';
import Item from './Item';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useSeleccionarOpcion from 'hooks/ecommerce/useSeleccionarOpcion';

function Conectores({items, setConector}) {

    const {setOpcionesHandler, mostrarConectores, opcionesHandler} = useSeleccionarOpcion();

    const opcionesRef = useRef();

    function seleccionarElemento(e, id){        
        setOpcionesHandler(!opcionesHandler)
        setConector(id);
        mostrarConectores(opcionesRef);        
    }

  return (
      <div className='modal-conectores '>
        <div className='encabezado'>
            <p>Conectores</p>
            <MdKeyboardArrowDown onClick={()=> mostrarConectores(opcionesRef)}/>
        </div>
        <article ref={opcionesRef} className='opciones-conectores'>
            {
                items.map(
                    item =>  <Item item={CONECTORES.filter(conec => conec.nombre === item)} seleccionarElemento={seleccionarElemento} opcionesHandler={opcionesHandler} key={item} />
                )
            }        
        </article>
    </div>
    
  )
}

export default Conectores