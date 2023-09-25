import React from 'react';
import {BiSearch} from 'react-icons/bi';
import FiltroItem from './FiltroItem';

function FiltroForm({filtrar, setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setHandler}) {
  return (
    <form action="" onSubmit={(e)=> filtrar(e, setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setHandler)} >
        <div className='filtro'>
            <FiltroItem text='Gasoterapia' id='gasoterapia'/>
            <FiltroItem text='Unidades de Suministro' id='unidsuministro'/>
            <FiltroItem text='Accesorios' id='accesorios'/>       
        </div>
        <button type='submit' className='submit-btn'>
            Buscar <BiSearch/>
        </button>                
    </form>
  )
}

export default FiltroForm