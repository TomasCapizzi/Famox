import React,{useRef, useState} from 'react';

import {BsPlusCircle} from 'react-icons/bs';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesGasConec from 'hooks/ecommerce/unidadSuministro/useOpcionesGasConec';

function GasConector({item, conexiones, setConexiones}) {
  const opcionesRef = useRef();
  const conectorRef = useRef();
  const gasRef = useRef();
  const cantidadRef = useRef();

  const {mostrarConexionGases} = useMostrarOpciones();
  const [handler, setHandler] = useState(false);
  const {agregarConexion} = useOpcionesGasConec(conexiones, setConexiones, mostrarConexion, conectorRef, gasRef,cantidadRef )
  
  function mostrarConexion(){
    setHandler(!handler);
  }
  return (
    <article className='modal-gasconec'>
      <div className='encabezado'>
          <p>Conexión de Gas</p>
          <MdKeyboardArrowDown onClick={()=> mostrarConexionGases(opcionesRef)} />
      </div>
    <article className='opciones' ref={opcionesRef}>
      <div className='agregar'>
        <BsPlusCircle onClick={()=> mostrarConexion()} />
        <p>Agrega una nueva conexión</p>
      </div>

      {
        handler ?
          <div className='conexiones'>
            <select name="conector" id="conector" ref={conectorRef}>
              {
                item.conectores.map(
                  opcion => <option value={opcion} key={opcion}>{opcion}</option>
                )
              }
            </select>
            <select name="gas" id="gas" ref={gasRef}>
              {
                item.gases.map(
                  gas => <option value={gas} key={gas}>{gas}</option>
                )
              }
            </select>
            <input type="number" min={0} placeholder='0' ref={cantidadRef} />
            <button onClick={()=>agregarConexion()}>Agregar</button>
          </div>
        : null
      }
      
    </article>

</article>
  )
}

export default GasConector

