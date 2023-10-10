import React from 'react';
import Botonera from '../Botonera';

function HabilitacionBotonera({item, conector, gas, rango, modelo, agregarAlCarrito, toggleModal}) {
  return (
    <>
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
    </>
  )
}

export default HabilitacionBotonera