import {BiReset, BiSearch} from 'react-icons/bi';
import React, {useState} from 'react';

function Filtro({setGasoterapiaHandler, setUnidSumHandler, setHandler}) {

   // const [handler, setHandler] = useState(false);

    function filtrar(e){
        e.preventDefault();
        
        //setProductos(listadoProductos);
        
        // Tipos de producto
        const gasoterapia = e.target.gasoterapia.checked;
        const unidadesSuministro = e.target.unidsuministro.checked;


        // Busqueda de Gasoterapia
        if(gasoterapia === true && unidadesSuministro === false){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(true)
                setUnidSumHandler(false)
                setHandler(true)
            },800)
        }

        // Búsqueda de Unidades de Suministro
        else if(gasoterapia === false && unidadesSuministro === true){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(false)
                setUnidSumHandler(true)
                setHandler(true)
            },800)
        } 

        // Búsqueda de ambos
        else if(gasoterapia === true && unidadesSuministro === true){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(true)
                setUnidSumHandler(true)
                setHandler(true)
            },800)
        } 

        // Busqueda nula
        else{
            console.log('No hay categorias seleccionadas');
        }

    }

    function reset(){
        setHandler(false)
        setTimeout(()=>{
            setGasoterapiaHandler(true)
            setUnidSumHandler(true)
            setHandler(true)
        },800)
    }


  return (
    <article className='filtro-container'>
        <div className='filtro-wrap'>
            <form action="" onSubmit={(e)=> filtrar(e)} >
                <div className='filtro'>
                    <div>
                        <input type="checkbox" id='gasoterapia' defaultChecked />
                        <label htmlFor="gasoterapia">Gasoterapia</label>
                    </div>
                    <div >
                        <input type="checkbox" id='unidsuministro' defaultChecked />
                        <label htmlFor="unid-suministro">Unidades Suministro</label>
                    </div>                
                </div>
                <button type='submit' className='submit-btn'>
                    Buscar <BiSearch/>
                </button>
            
            </form>
            <button onClick={reset} >Resetear búsqueda <BiReset/></button>
        </div>

    </article>
  )
}

export default Filtro;
