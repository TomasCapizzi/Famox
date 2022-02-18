import React,{useRef} from 'react'

function GasItem({item, seleccionarElemento}) {
    const divRef = useRef();

    function seleccionarItem(e){
        seleccionarElemento(e, item.nombre)
    }
  return (
    <div ref={divRef} className='gas' id={item.nombre} onClick={(e)=> seleccionarItem(e) } >
        <img src={item.img} alt="gas"/>
        <label htmlFor="">{item.nombre}</label>
    </div>
  )
}

export default GasItem