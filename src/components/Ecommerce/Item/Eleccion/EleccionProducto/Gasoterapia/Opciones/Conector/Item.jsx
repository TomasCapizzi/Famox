import React, {useRef} from 'react';
import {FaPlusCircle} from 'react-icons/fa';

function OpcionItem({item, seleccionarElemento}) {

    const divRef = useRef();

    function seleccionarItem(e){
        seleccionarElemento(e, item[0].nombre)
    }
  return (
    <div ref={divRef} className='conector' id={item[0].nombre} onClick={(e)=> seleccionarItem(e) } >
        <img src={item[0].img} alt="conector"/>
        <p htmlFor="">{item[0].nombre}</p>
        <FaPlusCircle/>
    </div>
  )
}

export default OpcionItem