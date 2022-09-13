import React, {useContext} from 'react';

import {BsTrashFill} from 'react-icons/bs';
import { CarritoContext } from 'store/carritoContext';

function CarritoItemAcc({item}) {

    const {removerItem} = useContext(CarritoContext);

  return (
    <tr className='carrito-item'>
        <td><img src={item.img} alt="item" /><p>{item.nombre}</p></td>
        <td>
            <ul className='opciones'>
                {
                item.gas &&       
                    <li>Gas: <span>{item.gas.toUpperCase()}</span></li>
                }
            </ul>
        </td>
        <td><p>{item.codigo}</p></td>
        <td><p>{item.cantidad}</p></td>
        <td><BsTrashFill onClick={()=> removerItem(item)} /></td>    
    </tr>
  )
}

export default CarritoItemAcc