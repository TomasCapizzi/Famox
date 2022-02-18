import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

import React from 'react';
import useContador from '../../../../../hooks/ecommerce/useContador';

function Botonera({agregarAlCarrito}) {

    const {cantidad, incrementar, descontar} = useContador();

  return (
    <div className='botonera'>
        <div className='contador'>
        <button disabled={cantidad === 0} onClick={descontar} ><AiOutlineMinusCircle/></button>
        <p>{cantidad}</p>
        <button onClick={incrementar} ><AiOutlinePlusCircle/></button>
        </div>
        <button className='confirmar' onClick={()=> agregarAlCarrito(cantidad)} disabled={cantidad === 0} >Comprar</button>
    </div>
  )
}

export default Botonera