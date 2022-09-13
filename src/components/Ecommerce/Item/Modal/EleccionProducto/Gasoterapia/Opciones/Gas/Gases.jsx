import React, {useRef} from 'react';

import GASES from 'data/gases';
import Item from './Item';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';

function Gases({items, setGas}) {

    const {mostrarGases, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();

    const opcionesRef = useRef();

    function seleccionarElemento(e, id){
        setOpcionesHandler(!opcionesHandler)
        setGas(id);
        mostrarGases(opcionesRef);        
    }


  return (
      <div className='modal-gases'>
        <div className='encabezado'> 
            <p>Gases</p>
            <MdKeyboardArrowDown onClick={()=> mostrarGases(opcionesRef)}/>
        </div>     
        <article className='opciones-gases' ref={opcionesRef}>
            {
                items.map(
                    item => <Item item={GASES.filter(gas => gas.nombre === item)} seleccionarElemento={seleccionarElemento} key={item} />
                )
            }
        </article>
    </div>
  )
}

export default Gases