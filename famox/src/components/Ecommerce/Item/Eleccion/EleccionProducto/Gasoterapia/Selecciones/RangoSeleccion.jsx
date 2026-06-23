import React from 'react';
import { useTranslation } from 'react-i18next';
import {TiDelete} from 'react-icons/ti';

function RangoSeleccion({rango, eliminarSeleccionRango}) {
  const {t} = useTranslation()
  return (
    <div className='seleccionado'>
        <p>{t("ecomm.steps.j")} {rango}</p>
        <button name='Borrar seleccion rango'><TiDelete onClick={eliminarSeleccionRango} /></button>
    </div>
  )
}

export default RangoSeleccion