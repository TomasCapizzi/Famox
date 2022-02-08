import React, {useEffect, useState} from 'react';

import Item from './Item';

function Gasoterapia() {
    const api = 'https://famox-api.herokuapp.com/api/products/gasoterapia';
    const [products, setProducts] = useState([]);

    async function getProducts(){
        const response = await fetch(api);
        const res = await response.json()
        console.log(res.products[0]);
        setProducts(res.products)
    }

    useEffect(()=>{
        getProducts();
    },[])

    return(
        <section className='categoria'>
            <h1>Gasoterapia</h1>
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

export default Gasoterapia;
