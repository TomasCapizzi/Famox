import {useState} from 'react';

const useContador = () => {

    const [cantidad, setCantidad] = useState(0);

    function incrementar(){
        setCantidad(cantidad + 1);
      }
    function descontar(){
    if(cantidad>=1){
        setCantidad(cantidad-1);
    }
    }

  return {
    cantidad,
    incrementar,
    descontar   
  }
 

}

export default useContador