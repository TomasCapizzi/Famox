import React, {useRef} from 'react';

import Item from './Item';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';

function Rango({item, setRango}){

    const opcionesRef = useRef();

    const {mostrarRangos, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();

    function seleccionarElemento(e, id){
        setOpcionesHandler(!opcionesHandler)
        setRango(id.toUpperCase());
        mostrarRangos(opcionesRef);        
    }

  return (
    <div className='modal-rangos'>
        <div className='encabezado'> 
            <p>Rangos</p>
            <MdKeyboardArrowDown onClick={()=> mostrarRangos(opcionesRef)}/>
        </div>
        <article ref={opcionesRef} className='opciones-rangos'>
        {
          item.rangos && item.rangos.map(
            rango => <Item key={rango._id} rango={rango} seleccionarElemento={seleccionarElemento}/>
          )
        }
        </article>
    </div>
  )
}

export default Rango