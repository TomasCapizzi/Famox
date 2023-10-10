import React from 'react';
import {FaPlusCircle} from 'react-icons/fa';

function ModeloItem({modelo, seleccionarElemento, refNoti}) {
  return (
    <>
    <tr className='modal-modelo'>
      <td><img src={modelo.img} alt="modelo" /></td>
      <td className={modelo.img ? '' : 'btn' }>{modelo.nombre}</td>
      <td><p>{modelo.rango? `${modelo.uso}, ${modelo.rango}` : modelo.uso}</p></td>
      <td><FaPlusCircle onClick={()=> seleccionarElemento(modelo)}/></td>
    </tr>
    </>
  )
}

export default ModeloItem
