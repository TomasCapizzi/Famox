import {BiReset, BiSearch} from 'react-icons/bi';

import React from 'react';
import useFiltro from 'hooks/ecommerce/useFiltro';

function Filtro({setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setHandler}) {

    const {filtrar, reset} = useFiltro();

    return (
        <article className='filtro-container'>
            <div className='filtro-wrap'>
                <form action="" onSubmit={(e)=> filtrar(e, setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setHandler)} >
                    <div className='filtro'>
                        <div>
                            <input type="checkbox" id='gasoterapia' defaultChecked />
                            <label htmlFor="gasoterapia">Gasoterapia</label>
                        </div>
                        <div >
                            <input type="checkbox" id='unidsuministro' defaultChecked />
                            <label htmlFor="unid-suministro">Unidades Suministro</label>
                        </div>         
                        <div >
                            <input type="checkbox" id='accesorios' defaultChecked />
                            <label htmlFor="accesorios">Accesorios</label>
                        </div>        
                    </div>
                    <button type='submit' className='submit-btn'>
                        Buscar <BiSearch/>
                    </button>
                
                </form>
                <button onClick={()=>reset(setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setHandler)} >Resetear búsqueda <BiReset/></button>
            </div>

        </article>
    )
}

export default Filtro;
