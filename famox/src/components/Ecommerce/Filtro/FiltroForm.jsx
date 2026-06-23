import React,{useRef} from 'react';
import {BiSearch} from 'react-icons/bi';
import FiltroItem from './FiltroItem';
import { useTranslation } from 'react-i18next';

// USAR REF
function FiltroForm({filtrar, setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler}) {

  const filtroGasoterapiaRef = useRef();
  const filtroUnidSumRef = useRef();
  const filtroAccesoriosRef = useRef();
  const filtroEquiposDigRef = useRef();

  const {t} = useTranslation();
  return (
    <form action="" onSubmit={(e)=> filtrar(e, setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler, filtroGasoterapiaRef, filtroUnidSumRef, filtroAccesoriosRef, filtroEquiposDigRef)} >
        <div className='filtro'>
            <FiltroItem text={t("home.categorias.b")} reference={filtroGasoterapiaRef}/>
            <FiltroItem text={t("home.categorias.a")} reference={filtroUnidSumRef}/>
            <FiltroItem text={t("home.categorias.c")} reference={filtroAccesoriosRef}/>
            <FiltroItem text={t("home.categorias.d")} reference={filtroEquiposDigRef}/>     
        </div>
        <button type='submit' className='submit-btn'>
            {t("ecomm.menu.val1")} <BiSearch/>
        </button>                
    </form>
  )
}

export default FiltroForm