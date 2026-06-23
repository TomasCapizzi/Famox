import { useState } from "react";

const useListaObras = () => {
    const [obras, setObras] = useState([]);

    const getObras = async ()=> {
        const response = await fetch('https://famox-api.vercel.app/api/products/obras');
        const res = await response.json();
        setObras(res.products.sort((a,b)=> b.fecha-a.fecha));
    }
  return {
    obras,
    getObras
  }
}

export default useListaObras