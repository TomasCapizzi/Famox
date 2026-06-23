import React from 'react';
import { useTranslation } from 'react-i18next';
import {TiDelete} from 'react-icons/ti';
function ModeloSeleccion({nombre, eliminarSeleccionModelo}) {
    const { i18n } = useTranslation();
    const lang = i18n.language; 
  return (
    <div className='seleccionado modelo'>
        <p>{nombre[lang]}</p>
        <button name='Borrar selección'><TiDelete onClick={eliminarSeleccionModelo} /></button>
    </div>
  )
}

export default ModeloSeleccion