import React from 'react';
import ConectorSeleccion from './ConectorSeleccion';
import GasSeleccion from './GasSeleccion';
import RangoSeleccion from './RangoSeleccion';
import ModeloSeleccion from './ModeloSeleccion';
import { useTranslation } from 'react-i18next';

function SeleccionContainer({gas, conector, rango, modelo, item, eliminarSeleccionConector, eliminarSeleccionGas, eliminarSeleccionRango, eliminarSeleccionModelo}) {
    const {t} = useTranslation();   
    
  return (
    <div className='selecciones'>
        {
        gas || conector || rango || modelo ? <p>{t("ecomm.steps.b")}</p> : null
        }
        <div className='selecciones-container'>
        {
            conector && <ConectorSeleccion conector={conector} eliminarSeleccionConector={eliminarSeleccionConector} />
        }
        {
            gas && <GasSeleccion gas={gas} eliminarSeleccionGas={eliminarSeleccionGas} gases={item.gases_} />
        }
        {
            rango && <RangoSeleccion rango={rango} eliminarSeleccionRango={eliminarSeleccionRango} />
        }
        {
            item.modelos ?
                modelo && <ModeloSeleccion nombre={modelo.nombre} eliminarSeleccionModelo={eliminarSeleccionModelo} /> : null
        }
        </div>
    </div> 
  )
}

export default SeleccionContainer