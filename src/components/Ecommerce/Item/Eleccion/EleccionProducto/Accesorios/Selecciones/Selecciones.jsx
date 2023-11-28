import React from 'react'
import SeleccionItem from './SeleccionItem';

function Selecciones({accesorios, eliminarSeleccion}){
  return (
    <div className='selecciones-acc'>
        {/* Copiar estilo al de la eleccion en Gasoterapia */}
        <p>{accesorios.length ? 'Tu selección' : ''}</p>
        <div>
        {
            accesorios.map(
                acc => <SeleccionItem acc={acc} key={acc.nombre + acc.gas}  eliminarSeleccion={eliminarSeleccion}/>
            )
        }
        </div>
    </div>
  )
}

export default Selecciones