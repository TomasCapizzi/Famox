import Botonera from './Botonera'
import CONECTORES from '../../../../../data/conectores'
import Conectores from './Opciones/Conectores'
import GASES from '../../../../../data/gases'
import Gases from './Opciones/Gases'
import React from 'react'
import {TiDelete} from 'react-icons/ti';
import useAgregarCarrito from '../../../../../hooks/ecommerce/useAgregarCarrito'

function EleccionProducto({item,toggleModal }) {

    const {agregarAlCarrito, setConector, setGas, conector, gas} = useAgregarCarrito({item})

    function eliminarSeleccionConector(){
      setConector();
    }
    function eliminarSeleccionGas(){
      setGas();
    }

  return (
    <div className='modal-eleccion'>
        <div className='container' >
          {
            item.conexion ? 
              <Conectores item={item} setConector={setConector} />
            : null
          }
          {
            item.gas ?             
              <Gases item={item} setGas={setGas} />
            : null
          }

          {
            item.gas || item.conexion ? 
              <div className='selecciones'>
                {
                  gas || conector ? <p>Tu selección</p> : null
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
                </div>
              </div> 
            : null
            }

            {
              (item.gas && item.conexion) ? 
                (conector && gas) ?
                  <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
                 : <p>Primero debes seleccionar el tipo de gas y su conexión</p>

              : (item.gas && item.conexion === false) ? 
                (gas) ?
                  <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
                 : <p>Selecciona el tipo de gas</p>

              : (item.gas === false && item.conexion) ?
                (conector) ?
                  <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
                : <p>Selecciona el tipo de conector</p>

              :  <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
            }

            
        </div>
    </div>
  )
}

export default EleccionProducto