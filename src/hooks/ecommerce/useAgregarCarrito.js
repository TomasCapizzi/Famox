import {useContext, useState} from 'react'

import { CarritoContext } from 'store/carritoContext';
import useCodigo from 'hooks/codigos/useCodigos';

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
          _id: Math.random().toString(36).split('.')[1]
        }
        agregarItemGasoterapia({producto})
      }

    }

    function buscarCoincidenciaModelo(cantidad){

      const {nombre, img} = item
      const codigo = derivarFuncion();
      // Hacer comparación x codigo
      const coincidencia = carro.find(
        producto => producto.codigo === codigo
      )       
      if(coincidencia){
        // Si coincide genero un nuevo item con la misma data pero otro ID y lo mando al context
        const nuevoID = Math.random().toString(36).split('.')[1];
        const producto = {
          nombre,
          fecha: new Date(),
          codigo,
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
          fecha: new Date(),
          codigo: derivarFuncion(),
          gas,
          conector,
          img,
          cantidad,
          rango,
          modelo,
          _id: Math.random().toString(36).split('.')[1]
        }
        agregarItemGasoterapia({producto})
      }
    }

    function buscarCoincidenciaUnidSum(cantidad){
      // destructuring de variables del ITEM
      const {nombre, img} = item
      // Panel contiene longitud lo que los demás no, por eso se aisla
      if(nombre === 'Panel de Cabecera'){
        const producto = {
          nombre,
          fecha: new Date(),
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
        fecha: new Date(),
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