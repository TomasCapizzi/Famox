import React,{useRef, useState} from 'react';

import {BsPlusCircle} from 'react-icons/bs';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useSeleccionarOpcion from 'hooks/ecommerce/useSeleccionarOpcion';

function GasConector({item, conexiones, setConexiones}) {
  const opcionesRef = useRef();
  const conectorRef = useRef();
  const gasRef = useRef();
  const cantidadRef = useRef();

    
  const {mostrarConexionGases} = useSeleccionarOpcion();
  const [handler, setHandler] = useState(false);
  
  function mostrarConexion(){
    setHandler(!handler);
  }
  function agregarConexion(){
    if(conectorRef.current.value !== '' && gasRef.current.value !== '' && cantidadRef.current.value !== '' ){
      const conexion = {
        conector : conectorRef.current.value,
        gas : gasRef.current.value,
        cantidad : parseInt(cantidadRef.current.value)
      }
      verificarItemConexion(conexion);
    }
  }

  function verificarItemConexion(conexion){
    const duplicado = conexiones.find(item => item.gas === conexion.gas && item.conector === conexion.conector)
    if(duplicado){
      const modificarConexiones = conexiones.filter(
        item => item !== duplicado
      )
      const {conector, gas, cantidad} = conexion
      const nuevo = {
        conector,
        gas,
        cantidad: cantidad + duplicado.cantidad
      }
      setConexiones([
        ...modificarConexiones,
        nuevo
      ])
    } else{
      setConexiones([
        ...conexiones,
        conexion
      ])
      mostrarConexion()
    }

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

