import React,{useEffect, useRef, useState} from 'react';

import {AiOutlinePlusCircle} from 'react-icons/ai';
import useCodigo from 'hooks/codigos/useCodigos';

function Modelo({accesorio, seleccionAccesorio, activarNoti, gasesHandler}) {
  const {gas, nombre, img} = accesorio;
  const [gases, setGases] = useState();
  const gasRef = useRef();
  const inputRef = useRef();
  const {derivarFuncion} = useCodigo(nombre)


  function agregarAcc(){
    const cantidad = Number(inputRef.current.value)
    console.log(gasesHandler);
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
      activarNoti()
    }
  }

  useEffect(()=>{
    if(gas){
      setGases(Object.entries(gas).filter(item => item[1]))
    }
  }, [])

  return (
    <div className='modelo-acc'>
      <div className='modelo-despcrip'>
        <img src={accesorio.img} alt="accesorio" />
        <p>{accesorio.nombre}</p>
      </div>
      <div className='modelo-eleccion'>
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
          <button onClick={()=> agregarAcc()}><AiOutlinePlusCircle/></button>
      </div>
    </div>
  )
}

export default Modelo

