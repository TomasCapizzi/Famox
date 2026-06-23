import React from 'react';
import { useTranslation } from 'react-i18next';
import {TiDelete} from 'react-icons/ti';

function SeleccionContainer({modelo, eliminarSeleccion}) {
  console.log(modelo);
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const {t} = useTranslation();
  return (
    <div className='selecciones'>
        <p>{t("ecomm.steps.b")}</p>
        <div className='selecciones-container'>
          <div className='seleccionado'>
            <p>{modelo.nombre[lang]}</p>
            <button><TiDelete onClick={eliminarSeleccion} /></button>
          </div>
        </div>
    </div>
  )
}

export default SeleccionContainer