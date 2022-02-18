import Botonera from './Botonera'
import CONECTORES from '../../../../../data/conectores'
import Conectores from './Opciones/Conectores'
import GASES from '../../../../../data/gases'
import Gases from './Opciones/Gases'
import React from 'react'
import {TiDelete} from 'react-icons/ti';
import useAgregarCarrito from '../../../../../hooks/ecommerce/useAgregarCarrito'

function EleccionProducto({item}) {

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
            item.conector ? 
              <Conectores item={item} setConector={setConector} />
            : null
          }
          {
            item.gases ?             
              <Gases item={item} setGas={setGas} />
            : null
          }

          <div className='selecciones'>
            <p>Tu selección</p>
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
          <Botonera agregarAlCarrito={agregarAlCarrito} />
        </div>
    </div>
  )
}

export default EleccionProducto