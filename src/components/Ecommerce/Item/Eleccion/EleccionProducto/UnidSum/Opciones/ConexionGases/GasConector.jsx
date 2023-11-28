import React,{useRef, useState} from 'react';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesGasConec from 'hooks/ecommerce/unidadSuministro/useOpcionesGasConec';
import {FaPlusCircle} from 'react-icons/fa';


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
    mostrarConexionGases(opcionesRef);
  }
  return (
    <article className='eleccion-gasconec'>
      <EncabezadoOpciones titulo="Conexion de Gas" mostrarOpcion={mostrarConexionGases} opcionesRef={opcionesRef}/>
      <article className='opciones' ref={opcionesRef}>
        {
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
              <input type="number" name='gasconec' min={0} placeholder='0' ref={cantidadRef} />
              <FaPlusCircle onClick={()=>agregarConexion()}/>
            </div>
        }      
      </article>
    </article>
  )
}

export default GasConector

