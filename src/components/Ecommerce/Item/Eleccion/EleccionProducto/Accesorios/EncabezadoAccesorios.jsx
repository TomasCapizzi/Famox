import React from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md';

function EncabezadoAccesorios({item, mostrarOpcion, opcionesRef}) {

  return (
    <div className='encabezado-acc' onClick={()=> mostrarOpcion(opcionesRef)}>
      <img src={item.img} alt="accesorio" />
      <p>{item.nombre}</p>
      <MdKeyboardArrowDown />
    </div>
  )
}

export default EncabezadoAccesorios