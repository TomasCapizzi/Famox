import React from 'react'
import {TiDelete} from 'react-icons/ti';
import { useTranslation } from 'react-i18next';

function Conexiones({conexiones, eliminarItem}) {

  const {t} = useTranslation();

  return (
      conexiones.map(
          item => 
            <div className='seleccion-unidSum' key={`${item.conector}${item.gas}`}>
                <p>{t("ecomm.steps.l")} {item.conector}</p>
                <p>{t("ecomm.steps.m")} {item.gas}</p>
                <p>{t("ecomm.steps.n")} {item.cantidad}</p>
                <TiDelete onClick={()=> eliminarItem(item)}/>
            </div>
      )
  )
}

export default Conexiones