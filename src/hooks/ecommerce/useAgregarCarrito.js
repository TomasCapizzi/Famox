import {useContext, useState} from 'react'

import { CarritoContext } from '../../store/carritoContext';

const useAgregarCarrito = ({item}) => {

    const {agregarItem} = useContext(CarritoContext);
    
    const [gas, setGas] = useState();
    const [conector, setConector] = useState();

    function agregarAlCarrito(cantidad){
        console.log(cantidad);
        const {nombre, img, _id} = item
        const producto = {
          nombre,
          gas,
          conector,
          img,
          cantidad,
          _id
        }
        agregarItem({producto})
      }


    return {
        agregarAlCarrito,
        setConector,
        setGas,
        conector,
        gas,
    }
}

export default useAgregarCarrito;
