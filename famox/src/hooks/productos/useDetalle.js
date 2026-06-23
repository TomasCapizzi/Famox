import {useState} from 'react'

const useDetalle = () => {
    
    const [product, setProduct] = useState([]);
    const [handler, setHandler] = useState(false);

    async function getItem(api, id){
        const response = await fetch(api + id);
        const res = await response.json();
        setProduct(res)
        setHandler(true);
    }
  return {
      getItem,
      product,
      handler,
      setHandler,
      setProduct,
  }
}

export default useDetalle;