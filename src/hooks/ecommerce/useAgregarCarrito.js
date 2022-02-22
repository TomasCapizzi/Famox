import {useContext, useState} from 'react'

import { CarritoContext } from '../../store/carritoContext';

const useAgregarCarrito = ({item}) => {

    const {agregarItem, carro} = useContext(CarritoContext);
    
    const [gas, setGas] = useState();
    const [conector, setConector] = useState();

    function agregarAlCarrito(cantidad){
        const {nombre, img, _id} = item
        const coincidencia = carro.find(
          producto => (producto._id === _id) && ((item.gas !== producto.gas) || (item.conector !== producto.conector))
        )
        if(coincidencia){
          console.log('MISMO ID PERO DIFERENTE PROD')
          const nuevoID = (Math.random()*100 + 1).toString();
          const producto = {
            nombre,
            gas,
            conector,
            img,
            cantidad,
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
            _id
          }
          agregarItem({producto})
        }
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
