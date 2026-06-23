import React from 'react';
import { useTranslation } from 'react-i18next';
import {FaPlusCircle} from 'react-icons/fa';

function ModeloItem({modelo, seleccionarElemento}) {
  const { i18n } = useTranslation();
  const lang = i18n.language; 
  return (
    <>
    <div className='modal-modelo' onClick={()=> seleccionarElemento(modelo)}>
      <img src={modelo.img} alt="modelo" />
      <div>
        <h5 className={modelo.img ? '' : 'btn' }>{modelo.nombre[lang]? modelo.nombre[lang]:modelo.nombre}</h5>
        <p>{modelo.rango? `${modelo.uso[lang]}, ${modelo.rango[lang]}` : modelo.uso[lang]}</p>
      </div>
      <FaPlusCircle/>
    </div>
    </>
  )
}

export default ModeloItem
