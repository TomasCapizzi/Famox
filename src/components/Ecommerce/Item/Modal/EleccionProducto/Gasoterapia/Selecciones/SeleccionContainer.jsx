import React from 'react';
import ConectorSeleccion from './ConectorSeleccion';
import GasSeleccion from './GasSeleccion';
import RangoSeleccion from './RangoSeleccion';
import ModeloSeleccion from './ModeloSeleccion';

function SeleccionContainer({gas, conector, rango, modelo, item, eliminarSeleccionConector, eliminarSeleccionGas, eliminarSeleccionRango, eliminarSeleccionModelo}) {
  return (
    <div className='selecciones'>
        {
        gas || conector || rango || modelo ? <p>Tu selección</p> : null
        }
        <div className='container'>
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