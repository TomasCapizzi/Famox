import React from 'react';
import { useTranslation } from 'react-i18next';
import {TiDelete} from 'react-icons/ti';

function Selecciones({valores, eliminarItem}) {
  const {t} = useTranslation();
  const { i18n } = useTranslation();
  const lang = i18n.language; 

  console.log(valores);
  

  return (
    valores.map(
      item => item.cantidad > 0 &&
        <div className='seleccion-unidSum' key={item.nombre}>
          <p>{item.nombre[lang]}</p>
          <p>{t("ecomm.steps.a")} {item.cantidad}</p>
          <TiDelete onClick={()=> eliminarItem(item)}/>
        </div>
      )
  )
}

export default Selecciones