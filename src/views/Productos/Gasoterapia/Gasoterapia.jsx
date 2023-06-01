import React, {useEffect} from 'react';

import {Helmet} from 'react-helmet';
import Item from 'components/ListaProductos/Gasoterapia/Item';
import Spinner from 'components/Spinner/Spinner';
import useListaProductos from 'hooks/productos/useListaProductos';

function Gasoterapia() {
    const api = 'https://famox-api.vercel.app/api/products/gasoterapia';
    const {getProducts, products} = useListaProductos();
    
    useEffect(()=>{
        getProducts(api);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <section className='categoria'>
            <Helmet>
                <title>Gasoterapia</title>
                <meta name="description" content="Gasoterapia" />
                <meta name="keywords" content="gasoterapia, caudalimetro, mezclador de gases, oxigenoterapia, reguladora, flowmeter" />
            </Helmet>
            <h1>Gasoterapia</h1>
            <div className='items-container'>
                {
                    products.length>0 ?
                        products.map(
                            item => <Item key={item._id} product={item} />
                        )
                    : <Spinner/>
                }
            </div>
        </section>
    )
}

export default Gasoterapia;
