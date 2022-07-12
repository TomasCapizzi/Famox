import {useState} from 'react'

const useListaProductos = () => {
    const [products, setProducts] = useState([]);

    async function getProducts(api){
        const response = await fetch(api);
        const res = await response.json();
        setProducts(res.products);
    }
  return {
    getProducts,
    products
  }
}

export default useListaProductos