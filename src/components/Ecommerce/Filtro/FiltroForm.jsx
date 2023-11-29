import React,{useRef} from 'react';
import {BiSearch} from 'react-icons/bi';
import FiltroItem from './FiltroItem';
// USAR REF
function FiltroForm({filtrar, setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler}) {

  const filtroGasoterapiaRef = useRef();
  const filtroUnidSumRef = useRef();
  const filtroAccesoriosRef = useRef();
  const filtroEquiposDigRef = useRef();


  return (
    <form action="" onSubmit={(e)=> filtrar(e, setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler, filtroGasoterapiaRef, filtroUnidSumRef, filtroAccesoriosRef, filtroEquiposDigRef)} >
        <div className='filtro'>
            <FiltroItem text='Gasoterapia' reference={filtroGasoterapiaRef}/>
            <FiltroItem text='Unidades de Suministro' reference={filtroUnidSumRef}/>
            <FiltroItem text='Accesorios' reference={filtroAccesoriosRef}/>
            <FiltroItem text='Equipos Digitales' reference={filtroEquiposDigRef}/>     
        </div>
        <button type='submit' className='submit-btn'>
            Buscar <BiSearch/>
        </button>                
    </form>
  )
}

export default FiltroForm