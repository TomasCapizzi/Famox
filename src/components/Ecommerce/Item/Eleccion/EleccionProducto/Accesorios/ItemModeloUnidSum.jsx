import React from 'react'
import {FaPlusCircle} from 'react-icons/fa';

function ItemModeloUnidSum({item, agregarAcc}) {
  return (
    <div className='modal-modelo' onClick={()=> agregarAcc(item)}>
        <img src={item.img} alt="" />
        <p>{item.nombre}</p>
        <button><FaPlusCircle/></button>
    </div>
  )
}

export default ItemModeloUnidSum