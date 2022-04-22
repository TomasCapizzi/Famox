import Botonera from '../Botonera'
import CONECTORES from 'data/conectores'
import Conectores from './Opciones/Conectores'
import GASES from 'data/gases'
import Gases from './Opciones/Gases'
import Modelos from './Opciones/Modelos'
import Rango from './Opciones/Rango'
import React from 'react'
import {TiDelete} from 'react-icons/ti';
import useAgregarCarrito from 'hooks/ecommerce/useAgregarCarrito'

function EleccionGasoterapia({item,toggleModal }) {

    const {agregarAlCarrito, setConector, setGas, setModelo, setRango, modelo, conector, gas, rango} = useAgregarCarrito({item})

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
            item.conectores ? 
              <Conectores items={item.conectores} setConector={setConector} />
            : null
          }
          {
            item.gases_ ?             
              <Gases items={item.gases_} setGas={setGas} />
            : null
          }
          {
            item.rangos ?
              <Rango item={item} setRango={setRango} />
            : null
          }
          {
            item.modelos ?
              <Modelos item={item} setModelo={setModelo} />
            : null
          }

          {
            item.gases_ || item.conectores || item.modelos || item.rangos ? 
              <div className='selecciones'>
                {
                  gas || conector || rango || modelo ? <p>Tu selección</p> : null
                }
                <div className='container'>
                  {
                    conector && CONECTORES.map(
                      item => item.nombre === conector ? 
                        <div key={item.nombre} className='seleccionado'>
                          <button><TiDelete onClick={eliminarSeleccionConector} /></button>
                          <img src={item.img} alt="" />
                          <p>{item.nombre}</p>
                        </div>
                      : null
                    )
                  }
                  {
                    gas && GASES.map(
                      item => item.nombre === gas ? 
                        <div key={item.nombre} className='seleccionado' >
                          <button><TiDelete onClick={eliminarSeleccionGas} /></button>
                          <img src={item.img} alt="" />
                          <p>{item.nombre}</p>
                        </div>
                        : null
                    )
                  }
                  {
                    rango &&
                      <div className='seleccionado'>
                        <button><TiDelete onClick={eliminarSeleccionRango} /></button>
                        <p>Rango: {rango}</p>
                      </div>
                  }
                </div>
              </div> 
            : null
            }
            {
              item.modelos ?
                  modelo && 
                  <div className='seleccionado modelo'>
                    <button><TiDelete onClick={eliminarSeleccionModelo} /></button>
                    <p>{modelo.nombre}</p>
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