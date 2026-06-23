import React, {useContext} from 'react';

import {BsTrashFill} from 'react-icons/bs';
import { CarritoContext } from 'store/carritoContext';
import { useTranslation } from 'react-i18next';

function CarritoItemAcc({item}) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
    const {removerItem} = useContext(CarritoContext);
    const {t} = useTranslation();

  return (
    <tr className='carrito-item'>
        <td><img src={item.img} alt="item" /><p>{item.nombre[lang]}</p></td>
        <td>
            <ul className='opciones'>
                {
                item.gas &&       
                    <li>{t("cart.tabla.t6")} <span>{item.gas.toUpperCase()}</span></li>
                }
            </ul>
        </td>
        <td><p>{item.codigo}</p></td>
        <td><p>{item.cantidad}</p></td>
        <td><BsTrashFill onClick={()=> removerItem(item)} /></td>    
    </tr>
  )
}

export default CarritoItemAcc