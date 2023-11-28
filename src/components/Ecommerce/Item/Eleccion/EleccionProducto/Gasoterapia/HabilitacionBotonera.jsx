import React from 'react';
import Botonera from '../Botonera';

function HabilitacionBotonera({item, conector, gas, rango, modelo, agregarAlCarrito, eliminarSeleccionConector, eliminarSeleccionGas, eliminarSeleccionRango, eliminarSeleccionModelo, refNotificacionCompra}) {

  function borrarSelecciones(){
    conector && eliminarSeleccionConector();
    gas && eliminarSeleccionGas();
    rango && eliminarSeleccionRango();
    modelo && eliminarSeleccionModelo();
  }

  return (
    <>
        { // Habilitacion de Botonera
        (item.gases_ && item.conectores && !item.modelos && item.rangos) ?
        (conector && gas && rango) ?
            <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/>
        : <p className='botonera-adv'>Primero debes seleccionar el tipo de gas y su conexión y rango</p>

        : (!item.rangos && item.gas && item.conexion && !item.modelos ) ?
        (conector && gas)? <Botonera agregarAlCarrito={agregarAlCarrito}  borrarSelecciones={borrarSelecciones} />
        : <p className='botonera-adv'>Primero debes seleccionar el tipo de gas y su conexión</p>

        : (item.gas && item.conexion === false) ? 
        (gas) ?
        <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/>
        : <p className='botonera-adv'>Selecciona el tipo de gas</p>

        : (item.gas === false && item.conexion) ?
        (conector) ?
        <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/>
        : <p className='botonera-adv'>Selecciona el tipo de conector</p>

        : (item.modelos && !item.gas && !item.conexion ) ?
        modelo ? <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones} refNotificacionCompra={refNotificacionCompra}/>
        : <p className='botonera-adv'>Elige el modelo</p>

        : (item.gas && item.conexion && item.modelos) ?
        (conector && gas && modelo) ? 
        <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/>
        : <p className='botonera-adv'>Primero debes seleccionar el tipo de gas,su conexión y el modelo</p>

        : <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones} />
        }
    </>
  )
}

export default HabilitacionBotonera