import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

import React from 'react';
import useContador from 'hooks/ecommerce/useContador';
import { useTranslation } from 'react-i18next';
//import useNotificacion from 'hooks/ecommerce/useNotificacion';

function Botonera({agregarAlCarrito, borrarSelecciones, refNotificacionCompra}) {

    const {cantidad, incrementar, descontar} = useContador();
    const {t} = useTranslation();
    //const {activarNoti} = useNotificacion();

    function comprar(){
      agregarAlCarrito(cantidad);
      borrarSelecciones && borrarSelecciones();
      //activarNoti(refNotificacionCompra);
    }

  return (
    <div className='botonera'>
        <div className='contador'>
          <button disabled={cantidad === 0} onClick={descontar} name='Descontar' ><AiOutlineMinusCircle/></button>
          <p>{cantidad}</p>
          <button onClick={incrementar} name='Incrementar'><AiOutlinePlusCircle/></button>
        </div>
        <button className='confirmar' onClick={comprar} disabled={cantidad === 0} >{t("ecomm.steps.f")}</button>
    </div>
  )
}

export default Botonera