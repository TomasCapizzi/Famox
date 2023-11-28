import React from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md';

function EncabezadoOpciones({titulo, mostrarOpcion, opcionesRef}) {
  return (
    <div className='encabezado' onClick={()=> mostrarOpcion(opcionesRef)}>
        <p>{titulo}</p>
        <MdKeyboardArrowDown />
    </div>
  )
}

export default EncabezadoOpciones