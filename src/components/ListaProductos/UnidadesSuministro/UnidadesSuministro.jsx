import React, {useEffect, useState} from 'react';

import Item from './Item';

function UnidadesSuministro() {
  const api = 'https://famox-api.herokuapp.com/api/products/unidades-suministro'

  const [products, setProducts] = useState([]);

  async function getProducts(){
    const response = await fetch(api);
    const res = await response.json();
    setProducts(res.products)
  }

  useEffect(()=>{
    getProducts();
  },[])
  return (
    <section className='categoria'>
      <h1>Unidades de Suministro</h1>
      <div className='items-container'>
                {
                    products.length>0 ?
                        products.map(
                            item => <Item key={item._id} product={item} />
                        )
                    : <p>Cargando...</p>
                }
            </div>

    </section>
  )
}

export default UnidadesSuministro;
