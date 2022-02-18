import React, {useContext} from 'react';

import {BsTrashFill} from 'react-icons/bs';
import {CarritoContext} from '../../store/carritoContext';

function CarritoItem({item}) {

  const {removerItem} = useContext(CarritoContext);

  return (
    <article className='carrito-item'>
        <img src={item.img} alt="" />
        <p>{item.nombre}</p>
        <p>Cantidad: {item.cantidad}</p>
        <BsTrashFill onClick={()=> removerItem(item)} />
    </article>
  )
}

export default CarritoItem