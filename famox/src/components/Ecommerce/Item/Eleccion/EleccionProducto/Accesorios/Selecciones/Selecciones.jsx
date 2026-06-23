import React from 'react'
import SeleccionItem from './SeleccionItem';
import { useTranslation } from 'react-i18next';
function Selecciones({accesorios, eliminarSeleccion}){
    const { i18n } = useTranslation();
    const lang = i18n.language; 

  return (
    <div className='selecciones-acc'>
        {/* Copiar estilo al de la eleccion en Gasoterapia */}
        <p>{accesorios.length ? 'Tu selección' : ''}</p>
        <div>
        {
            accesorios.map(
                acc => <SeleccionItem acc={acc} key={acc.nombre[lang] + acc.gas}  eliminarSeleccion={eliminarSeleccion}/>)
        }
        </div>
    </div>
  )
}

export default Selecciones