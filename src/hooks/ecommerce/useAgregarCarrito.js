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
    const [longitudPanel, setLongitudPanel] = useState();
    //////////////////////////////////////////


    const {derivarFuncion} = useCodigo(item.nombre, gas, conector, rango, modelo) //Esta función regresa el código de los prod de gasoterapia

    function agregarAlCarrito(cantidad){
      // Antes de agregar busca coincidencia del mismo item para solo sumar la cantidad
        if(modelo){
          buscarCoincidenciaModelo(cantidad)
        } else if(item.gasoterapia) {
          buscarCoincidencia(cantidad)
        } else {
          buscarCoincidenciaUnidSum(cantidad)
        }
    }

    function buscarCoincidencia(cantidad){
      const {nombre, img} = item
      const codigo = derivarFuncion();
      // Hacer comparación x codigo
      const coincidencia = carro.find(
        producto => producto.codigo === codigo
      )       
      if(coincidencia){
        console.log('MISMO PROD', coincidencia)
        const nuevoID = (Math.random().toString(36)).split('.')[1];
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
        agregarItemGasoterapia({producto})
      } else {
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
      const {nombre, img, longitud} = item
      // Panel contiene longitud lo que los demás no, por eso se aisla
      if(longitud){
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
    function eliminarItem(item){
      const itemMediaTension = valoresMediaTension.find(
        valor=> valor === item
      );
      const itemBajaTension = valoresBajaTension.find(
        valor=> valor === item
      );
      const itemIluminacion = valoresIluminacion.find(
        valor=> valor === item
      );
      const itemConexion = conexiones.find(
        valor => valor === item
      );
      if(itemMediaTension){
        setValoresMediaTension(valoresMediaTension.filter(
          valor => valor !== item
        ))
      } else if(itemBajaTension){
        setValoresBajaTension(valoresBajaTension.filter(
          valor => valor !== item
        ))
      } else if(itemIluminacion){
        setValoresIluminacion(valoresIluminacion.filter(
          valor => valor !== item
        ))
      } else if(itemConexion){
        setConexiones(conexiones.filter(
          valor => valor !== item
        ))
      } else if(longitudPanel){
        setLongitudPanel();
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
        setLongitudPanel,
        eliminarItem
    }
}

export default useAgregarCarrito;