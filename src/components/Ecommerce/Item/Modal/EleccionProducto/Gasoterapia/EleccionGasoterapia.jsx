import Botonera from '../Botonera'
import ConectorSeleccion from './Selecciones/ConectorSeleccion'
import Conectores from './Opciones/Conector/Conectores'
import GasSeleccion from './Selecciones/GasSeleccion'
import Gases from './Opciones/Gas/Gases'
import ModeloSeleccion from './Selecciones/ModeloSeleccion'
import Modelos from './Opciones/Modelo/Modelos'
import Rango from './Opciones/Rango/Rango'
import RangoSeleccion from './Selecciones/RangoSeleccion'
import React from 'react'
import useAgregarCarrito from 'hooks/ecommerce/useAgregarCarrito'

function EleccionGasoterapia({item,toggleModal }) {

    const {agregarAlCarrito, setConector, setGas, setModelo, setRango, modelo, conector, gas, rango} = useAgregarCarrito({item});
    function eliminarSeleccionConector(){
      setConector();
    }
    function eliminarSeleccionGas(){
      setGas();
    }
    function eliminarSeleccionRango(){
      setRango();
    }
    function eliminarSeleccionModelo(){
      setModelo();
    }

  return (
    <div className='modal-eleccion'>
        <div className='container' >
          {
            item.conectores ? <Conectores items={item.conectores} setConector={setConector} /> : null
          }
          {
            item.gases_ ?             
              <Gases items={item.gases_} setGas={setGas} /> : null 
          }
          {
            item.rangos ?
              <Rango item={item} setRango={setRango} />: null            
          }
          {
            item.modelos ?
              <Modelos item={item} setModelo={setModelo} /> : null 
          }
          { // Selecciones de Gas, Conectores, Modelos y Rangos
            item.gases_ || item.conectores || item.modelos || item.rangos ? 
              <div className='selecciones'>
                {
                  gas || conector || rango || modelo ? <p>Tu selección</p> : null
                }
                <div className='container'>
                  {
                    conector && <ConectorSeleccion conector={conector} eliminarSeleccionConector={eliminarSeleccionConector} />
                  }
                  {
                    gas && <GasSeleccion gas={gas} eliminarSeleccionGas={eliminarSeleccionGas} />
                  }
                  {
                    rango && <RangoSeleccion rango={rango} eliminarSeleccionRango={eliminarSeleccionRango} />
                  }
                  {
                    item.modelos ?
                        modelo && <ModeloSeleccion nombre={modelo.nombre} eliminarSeleccionModelo={eliminarSeleccionModelo} /> : null
                  }
                </div>
              </div> 
            : null
            }
            
        </div>
        { // Habilitacion de Botonera
          (item.gases_ && item.conectores && !item.modelos && item.rangos) ?
            (conector && gas && rango) ?
              <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
            : <p>Primero debes seleccionar el tipo de gas y su conexión y rango</p>

          : (!item.rangos && item.gas && item.conexion && !item.modelos ) ?
            (conector && gas)? <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
            : <p>Primero debes seleccionar el tipo de gas y su conexión</p>

          : (item.gas && item.conexion === false) ? 
          (gas) ?
            <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
          : <p>Selecciona el tipo de gas</p>

          : (item.gas === false && item.conexion) ?
          (conector) ?
            <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
          : <p>Selecciona el tipo de conector</p>

          : (item.modelos && !item.gas && !item.conexion ) ?
          modelo ? <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
          : <p>Elige el modelo</p>

          : (item.gas && item.conexion && item.modelos) ?
          (conector && gas && modelo) ? 
          <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
          : <p>Primero debes seleccionar el tipo de gas,su conexión y el modelo</p>

          : <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
          }
    </div>
  )
}

export default EleccionGasoterapia;