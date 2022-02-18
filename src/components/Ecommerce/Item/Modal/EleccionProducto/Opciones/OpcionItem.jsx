import React, {useRef} from 'react';

function OpcionItem({item, seleccionarElemento}) {

    const divRef = useRef();

    function seleccionarItem(e){
        seleccionarElemento(e, item.nombre)
    }
  return (
    <div ref={divRef} className='conector' id={item.nombre} onClick={(e)=> seleccionarItem(e) } >
        <img src={item.img} alt="conector"/>
        <label htmlFor="">{item.nombre}</label>
    </div>
  )
}

export default OpcionItem