import {AiFillCloseCircle, AiFillInfoCircle} from 'react-icons/ai'
import React, {useContext, useRef, useState} from 'react';

import {BsTrashFill} from 'react-icons/bs';
import {CarritoContext} from '../../store/carritoContext';

function CarritoItem2({item}) {

  const {removerItem} = useContext(CarritoContext);
  const [handlerInfo, setHandlerInfo] = useState(false);

  const caractRef = useRef()

  const mostrarCaracteristicas = ()=> {
      setHandlerInfo(!handlerInfo);
      caractRef.current.classList.toggle('on')

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
        <tr className='caracteristicas' ref={caractRef} >
            {
                item.bajaTension.length >=1 &&       
                <td className='filter'>
                    <h5>Baja Tension</h5>
                    <ul>
                        {
                            item.bajaTension.map(
                                item => 
                                    <li className='propiedad'  key={item.nombre}>{item.nombre} Cantidad: {item.cantidad}</li>
                            )
                        }
                    </ul>

                </td>
            }
            {
                item.mediaTension.length >=1 && 
                <td className='filter'>
                    <h5>Media Tension</h5>
                    <ul>
                        {
                            item.mediaTension.map(
                                item => 
                                    <li className='propiedad'  key={item.nombre}>{item.nombre} Cantidad: {item.cantidad}</li>
                            )
                        }
                    </ul>

                </td>
            }
            {
                item.iluminacion.length >=1 &&
                <td className='filter'>
                    <h5>Iluminación</h5>
                    <ul>
                        {
                            item.iluminacion.map(
                                item =>
                                    <li className='propiedad'  key={item.nombre}>{item.nombre} Cantidad: {item.cantidad}</li>
                            )
                        }
                    </ul>
                </td>
            }
            {
                item.conexiones.length >=1 &&
                <td className='filter'>
                    <h5>Conexiones</h5>
                    <ul>
                        {
                            item.conexiones.map(
                                item => 
                                    <li className='propiedad'  key={item.conector + item.gas}>{item.conector}+{item.gas} Cantidad: {item.cantidad}</li>
                            )
                        }
                    </ul>
                </td>
            }
                    {
                item.longitud &&
                <td className='filter'>
                    <h5>Longitud</h5>
                    <p>{item.longitud}</p>
                </td>
            }
        </tr>      
    </>
  )
}

export default CarritoItem2