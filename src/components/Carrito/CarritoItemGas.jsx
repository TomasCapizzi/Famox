import React, {useContext} from 'react';

import {BsTrashFill} from 'react-icons/bs';
import {CarritoContext} from 'store/carritoContext';

function CarritoItem({item}) {
// Carrito Item para los equipos de GASOTERAPIA
  const {removerItem} = useContext(CarritoContext);

  return (
    <tr className='carrito-item'>
      <td><img src={item.img} alt="" /><p>{item.nombre}</p></td>
      <td>
        <ul className='opciones'>
            {
            item.gas &&       
                <li>Gas: <span>{item.gas}</span></li>
          }
          {
            item.conector && 
                <li>Conector: <span>{item.conector}</span></li>            
          }
          {
            item.rango &&
                <li>Rango: <span>{item.rango}</span></li>
          }
          {
            item.modelo &&
                <li>{item.modelo.rango || item.modelo.nombre}</li>
          }
        </ul>
      </td>
      <td><p>{item.codigo}</p></td>
      <td><p>{item.cantidad}</p></td>
      <td><BsTrashFill onClick={()=> removerItem(item)} /></td>    
    </tr>
  )
}

export default CarritoItem;