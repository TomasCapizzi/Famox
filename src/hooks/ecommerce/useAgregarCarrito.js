import {useContext, useState} from 'react'

import { CarritoContext } from '../../store/carritoContext';

const useAgregarCarrito = ({item}) => {
  
    const {agregarItem, carro} = useContext(CarritoContext);
    
    const [gas, setGas] = useState();
    const [conector, setConector] = useState();
    const [rango, setRango] = useState();
    const [modelo, setModelo] = useState();

    function agregarAlCarrito(cantidad){
        if(modelo){
          buscarCoincidenciaModelo(cantidad)
        } else {
          buscarCoincidencia(cantidad)
        }   
    }

    function buscarCoincidencia(cantidad){
      const {nombre, img, _id} = item
      const coincidencia = carro.find(
        producto => (producto.nombre === nombre) && ((producto.gas !== gas ) || ( producto.conector !== conector)|| ( producto.rango !== rango) )
      )        
      if(coincidencia){
        console.log('MISMO ID PERO DIFERENTE PROD', coincidencia)
        const nuevoID = (Math.random()*100 + 1).toString();
        const producto = {
          nombre,
          gas,
          conector,
          img,
          cantidad,
          rango,
          modelo,
          _id: nuevoID
        }
        agregarItem({producto})
      } else {
        const producto = {
          nombre,
          gas,
          conector,
          img,
          cantidad,
          rango,
          modelo,
          _id
        }
        agregarItem({producto})
      }

    }

    function buscarCoincidenciaModelo(cantidad){
      console.log(item);
      const {nombre, img, _id} = item
      const coincidencia = carro.find(
        producto => (producto.nombre === nombre) && ( (producto.gas !== gas ) || ( producto.conector !== conector)|| ( producto.modelo.nombre !== modelo.nombre) )
      )
      console.log(coincidencia);
      if(coincidencia){
        //console.log('MISMO ID PERO DIFERENTE MODELO')
        const nuevoID = (Math.random()*100 + 1).toString();
        const producto = {
          nombre,
          gas,
          conector,
          img,
          cantidad,
          rango,
          modelo,
          _id: nuevoID
        }
        console.log(producto);
        agregarItem({producto})
      } else {
        const producto = {
          nombre,
          gas,
          conector,
          img,
          cantidad,
          rango,
          modelo,
          _id
        }
        agregarItem({producto})
      }
    }


    return {
        agregarAlCarrito,
        setConector,
        setGas,
        setModelo,
        modelo,
        conector,
        gas,
        rango,
        setRango
    }
}

export default useAgregarCarrito;