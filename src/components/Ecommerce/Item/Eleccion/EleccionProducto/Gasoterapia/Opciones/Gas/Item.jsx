import React,{useRef} from 'react'
import {FaPlusCircle} from 'react-icons/fa';


function GasItem({item, seleccionarElemento}) {

    const divRef = useRef();
    function seleccionarItem(e){
      seleccionarElemento(e, item[0].nombre)
    }
  return (
  
      item[0].nombre === undefined ?
        null
      :
      <div ref={divRef} className='gas' id={item[0].nombre}  onClick={(e)=> seleccionarItem(e) } >
        <img src={item[0].img} alt="gas"/>
        <p htmlFor="">{item[0].nombre}</p>
        <FaPlusCircle/>
      </div>
    
  )
}

export default GasItem
