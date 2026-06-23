import React from 'react'
import {FaPlusCircle} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function ItemModeloUnidSum({item, agregarAcc}) {
    const { i18n } = useTranslation();
    const lang = i18n.language; 
    
  return (
    <div className='modal-modelo' onClick={()=> agregarAcc(item)}>
        <img src={item.img} alt="" />
        <p>{item.nombre[lang]}</p>
        <button><FaPlusCircle/></button>
    </div>
  )
}

export default ItemModeloUnidSum