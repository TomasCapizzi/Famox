import {useContext, useState} from 'react'

import { CarritoContext } from '../../store/carritoContext';
import useCodigo from '../codigos/useCodigos';

const useAgregarCarrito = ({item}) => {
  
    const {agregarItemGasoterapia, agregarItemUnidSum, carro} = useContext(CarritoContext);

    /////////  GASOTERAPIA  ////////////////
    const [gas, setGas] = useState();
    const [conector, setConector] = useState();
    const [rango, setRango] = useState();
    const [modelo, setModelo] = useState();
    ///////// UNIDAD DE SUMINISTRO  ////////
    const [valoresMediaTension, setValoresMediaTension] = useState([]);
    const [valoresBajaTension, setValoresBajaTension] = useState([]);
    const [valoresIluminacion, setValoresIluminacion] = useState([]);
    const [conexiones, setConexiones] = useState([]);
    // Panel de Cabecera:
    const [longitudPanel, setLongitudPanel] = useState();
    //////////////////////////////////////////


    const {derivarFuncion} = useCodigo(item.nombre, gas, conector, rango, modelo)

    function agregarAlCarrito(cantidad){
        if(modelo){
          buscarCoincidenciaModelo(cantidad)
        } else if(item.gasoterapia) {
          buscarCoincidencia(cantidad)
        } else {
          buscarCoincidenciaUnidSum(cantidad)
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
          codigo: derivarFuncion(),
          gas,
          conector,
          img,
          cantidad,
          rango,
          modelo,
          _id: nuevoID
        }
        agregarItemGasoterapia({producto})
      } else {
        const producto = {
          nombre,
          codigo: derivarFuncion(),
          gas,
          conector,
          img,
          cantidad,
          rango,
          modelo,
          _id
        }
        console.log(producto);
        agregarItemGasoterapia({producto})
      }

    }

    function buscarCoincidenciaModelo(cantidad){
      const {nombre, img, _id} = item
      const coincidencia = carro.find(
        producto => (producto.nombre === nombre) && ( (producto.gas !== gas ) || ( producto.conector !== conector)|| ( producto.modelo.nombre !== modelo.nombre) )
      )
      if(coincidencia){
        //console.log('MISMO ID PERO DIFERENTE MODELO')
        const nuevoID = (Math.random()*100 + 1).toString();
        const producto = {
          nombre,
          codigo: derivarFuncion(),
          gas,
          conector,
          img,
          cantidad,
          rango,
          modelo,
          _id: nuevoID
        }
        console.log(producto);
        agregarItemGasoterapia({producto})
      } else {
        const producto = {
          nombre,
          codigo: derivarFuncion(),
          gas,
          conector,
          img,
          cantidad,
          rango,
          modelo,
          _id
        }
        agregarItemGasoterapia({producto})
      }
    }

    function buscarCoincidenciaUnidSum(cantidad){
      // destructuring de variables del ITEM
      const {nombre, img} = item
      // const coincidencia, hacer un find con el CARRO

      // si hay coincidencia, que ejecute un codigo

      // sino este otro
      if(nombre === 'Panel de Cabecera'){
        const producto = {
          nombre,
          bajaTension: valoresBajaTension,
          mediaTension: valoresMediaTension,
          iluminacion: valoresIluminacion,
          conexiones,
          longitud: longitudPanel,
          img,
          cantidad,
          _id: Math.random().toString(36).split('.')[1]
        }
        console.log(producto);
        agregarItemUnidSum({producto})

      } else{
      const producto = {
        nombre,
        bajaTension: valoresBajaTension,
        mediaTension: valoresMediaTension,
        iluminacion: valoresIluminacion,
        conexiones,
        cantidad,
        img,
        _id: Math.random().toString(36).split('.')[1]
      }
      console.log(producto);
      agregarItemUnidSum({producto})
    }
    }


    return {
        agregarAlCarrito,
        // gasoterapia
        setConector,
        setGas,
        setModelo,
        setRango,
        modelo,
        conector,
        gas,
        rango,
        // unid sum
        valoresMediaTension,
        valoresBajaTension,
        valoresIluminacion,
        conexiones,
        longitudPanel,
        setValoresMediaTension,
        setValoresBajaTension,
        setValoresIluminacion,
        setConexiones,
        setLongitudPanel
    }
}

export default useAgregarCarrito;