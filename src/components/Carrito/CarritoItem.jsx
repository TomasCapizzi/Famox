import React, {useContext} from 'react';

import {BsTrashFill} from 'react-icons/bs';
import {CarritoContext} from '../../store/carritoContext';
import useCodigo from '../../hooks/codigos/useCodigos';

function CarritoItem({item}) {

  const {derivarFuncion} = useCodigo(item)

  const codigo =  derivarFuncion();
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
                <li>{(item.nombre === 'Recipiente Colector' || item.nombre === 'Mezclador de Aire/Oxígeno') ?  item.modelo.rango : item.modelo.nombre}</li>
          }
        </ul>
      </td>
      <td><p>{codigo}</p></td>
      <td><p>{item.cantidad}</p></td>
      <td><BsTrashFill onClick={()=> removerItem(item)} /></td>
      
      
    </tr>
  )
}

export default CarritoItem

/*
{
        item.gas &&       
          <td className='filter'>
            <p>Gas: {item.gas}</p>
          </td>
      }
      {
        item.conector && 
          <td className='filter'>
            <p>Conector: {item.conector}</p>
          </td>
      }
      {
        item.rango &&
          <td className='filter'>
            <p>Rango: {item.rango}</p>
          </td>
      }
      {
        item.modelo &&
          <td className='filter'>
            <p>{(item.nombre === 'Recipiente Colector' || item.nombre === 'Mezclador de Aire/Oxígeno') ?  item.modelo.rango : item.modelo.nombre}</p>
          </td>
      }
      

*/