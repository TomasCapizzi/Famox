import {useState} from 'react'

const useListaAccesorios = () => {
    const [accesorios, setAccesorios] = useState([]);
    const [handler, setHandler] = useState(false);

    async function getAccesorios(api){
        const response = await fetch(api);
        const res = await response.json();
        setAccesorios(res.products);
        setHandler(true);
      }
  
  return {
    getAccesorios,
    accesorios,
    setAccesorios,
    handler, 
    setHandler
  }
}

export default useListaAccesorios;