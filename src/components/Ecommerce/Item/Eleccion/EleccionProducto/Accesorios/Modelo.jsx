import React,{useEffect, useRef, useState} from 'react';
import {FaPlusCircle} from 'react-icons/fa';
import useCodigo from 'hooks/codigos/useCodigos';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import EncabezadoAccesorios from './EncabezadoAccesorios';

function Modelo({accesorio, seleccionAccesorio, activarNoti, gasesHandler, refNoti}) {
  const {gas, nombre, img} = accesorio;
  const [gases, setGases] = useState();
  const gasRef = useRef();
  const inputRef = useRef();
  const {derivarFuncion} = useCodigo(nombre)
  const {mostrarAccesorios} = useMostrarOpciones();
  const opcionesRef = useRef();

  function agregarAcc(){
    const cantidad = Number(inputRef.current.value)
    if(cantidad > 0){    
      gasesHandler ?   
        seleccionAccesorio({
          nombre,
          accesorio: true,
          img,
          gas: gasRef.current.value,
          codigo: derivarFuncion(gasRef.current.value),
          cantidad,
        }) :
        seleccionAccesorio({
          nombre,
          accesorio: true,
          img,
          codigo: derivarFuncion(),
          cantidad,
        })
      activarNoti(refNoti)
    }
    mostrarAccesorios(opcionesRef);
  }

  useEffect(()=>{
    if(gas){
      setGases(Object.entries(gas).filter(item => item[1]))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='modelo-acc'>
      <EncabezadoAccesorios item={accesorio} mostrarOpcion={mostrarAccesorios} opcionesRef={opcionesRef}/>
      <article ref={opcionesRef} className='opciones-accesorios'>
        {
          gases ? 
            <select name="gas" id="gas" ref={gasRef}>
              {gases.map(
                item => item[1] ? <option value={item[0]} key={item[0]} >{item[0].toUpperCase()}</option> : null
              ) 
              }
            </select> : null
        }
        <div>
          <p>Cantidad:</p>
          <input type="number" name="cantidad" id="cantidad" ref={inputRef} min={0}/>
        </div>        
        <button onClick={()=> agregarAcc()}><FaPlusCircle/></button>
      </article>
    </div>
  )
}

export default Modelo

