import React from 'react';
import { useTranslation } from 'react-i18next';
import {FaPlusCircle} from 'react-icons/fa';

function Modelo({item, agregarEquipoDigital}) {
    const { i18n } = useTranslation();
    const lang = i18n.language; 
  return (
    <div className='modelo' onClick={()=> agregarEquipoDigital(item)}>
      <p>{item.nombre[lang]}</p>     
      <button><FaPlusCircle/></button>
    </div>
  )
}

export default Modelo