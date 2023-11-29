import {BiReset} from 'react-icons/bi';

import React from 'react';
import useFiltro from 'hooks/ecommerce/useFiltro';
import FiltroForm from './FiltroForm';

function Filtro({setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler}) {

    const {filtrar, reset} = useFiltro();

    return (
        <article className='filtro-container'>
            <div className='filtro-wrap'>
                <FiltroForm filtrar={filtrar} setGasoterapiaHandler={setGasoterapiaHandler} setUnidSumHandler={setUnidSumHandler} setAccesoriosHandler={setAccesoriosHandler} setEquiposDigitalesHandler={setEquiposDigitalesHandler} setHandler={setHandler} />
                <button onClick={()=>reset(setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler)} >Resetear búsqueda <BiReset/></button>
            </div>

        </article>
    )
}

export default Filtro;
