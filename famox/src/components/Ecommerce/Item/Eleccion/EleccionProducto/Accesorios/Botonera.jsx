import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

import React from 'react';
import useContador from 'hooks/ecommerce/useContador';
import { useTranslation } from 'react-i18next';
//import useNotificacion from 'hooks/ecommerce/useNotificacion';

function Botonera({accesorios, setAccesorios, agregarAlCarrito}) {

    const {cantidad, incrementar, descontar} = useContador();
    //const {activarNoti} = useNotificacion();
    const {t} = useTranslation();

    const comprar = ()=>{
        accesorios.forEach(acc => agregarAlCarrito(acc, cantidad));
        setAccesorios([])
      }

  return (
    accesorios.length ?
    <div className='botonera'>
        <div className='contador'>
          <button disabled={cantidad === 0} onClick={descontar} name='Descontar' ><AiOutlineMinusCircle/></button>
          <p>{cantidad}</p>
          <button onClick={incrementar} name='Incrementar'><AiOutlinePlusCircle/></button>
        </div>
        <button className='confirmar' onClick={comprar} disabled={cantidad === 0} >{t("ecomm.steps.c")}</button>
    </div>
    : null
  )
}

export default Botonera