import React, {useEffect} from 'react';

import Item from 'components/ListaProductos/Gasoterapia/Item';
import Spinner from 'components/Spinner/Spinner';
import useListaProductos from 'hooks/productos/useListaProductos';

function Gasoterapia() {
    const api = 'http://famox-env.eba-8tvz54ez.sa-east-1.elasticbeanstalk.com/api/products/gasoterapia';
    const {getProducts, products} = useListaProductos();
    
    useEffect(()=>{
        getProducts(api);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    : <Spinner/>
                }
            </div>
        </section>
    )
}

export default Gasoterapia;
