import React, {useContext} from 'react';

import {BsTrashFill} from 'react-icons/bs';
import {CarritoContext} from '../../store/carritoContext';

function CarritoItem({item}) {

  const {removerItem} = useContext(CarritoContext);

  return (
    <tr className='carrito-item'>
        <td><img src={item.img} alt="" /></td>
        <td><p>{item.nombre}</p></td>
        <td><p>{item.cantidad}</p></td>
        <td><BsTrashFill onClick={()=> removerItem(item)} /></td>
        
    </tr>
  )
}

export default CarritoItem