import {AiFillCloseCircle, AiFillInfoCircle} from 'react-icons/ai'
import React, {useContext, useRef, useState} from 'react';

import {BsTrashFill} from 'react-icons/bs';
import {CarritoContext} from 'store/carritoContext';
import DetallesUnidSum from './DetallesUnidSum';

function CarritoItem2({item}) {
// Carrito Item 2 para los equipos de UNIDADES DE SUMINISTRO
  const {removerItem} = useContext(CarritoContext);
  const [handlerInfo, setHandlerInfo] = useState(false);

  const caractRef = useRef()

  const mostrarCaracteristicas = ()=> {
      setHandlerInfo(!handlerInfo);
      caractRef.current.classList.toggle('on');
  }

  return (
    <>
        <tr className='detalles'>
            <td><img src={item.img} alt="" /><p>{item.nombre}</p></td>
            <td>
                {
                    handlerInfo ? <AiFillCloseCircle className='info' onClick={mostrarCaracteristicas}/> : <AiFillInfoCircle className='info' onClick={mostrarCaracteristicas}/> 
                }
            </td>
            <td><p> - </p></td>
            <td><p>{item.cantidad}</p></td>
            <td><BsTrashFill onClick={()=> removerItem(item)} /></td>

        </tr>
        <DetallesUnidSum item={item} caractRef={caractRef} />
    </>
  )
}

export default CarritoItem2