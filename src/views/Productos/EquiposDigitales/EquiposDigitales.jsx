import React, {useEffect} from 'react';


import {Helmet} from 'react-helmet';
import Spinner from 'components/Spinner/Spinner';
import useListaProductos from 'hooks/productos/useListaProductos';
import Item from 'components/ListaProductos/Accesorios/Item';

function Llamadores() {
    const api = 'https://famox-api.vercel.app/api/products/equipos-digitales';
    const {getProducts, products} = useListaProductos();

    useEffect(()=>{
        getProducts(api);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <section className='accesorios'>
      <Helmet>
        <title>Equipos Digitales</title>
        <meta name="description" content="Llamador de enfermera Yanward,alarma digital de gases y central repetidora" />
      </Helmet>
      <h1>Equipos Digitales</h1>
      <div>
        {
          products.length>0 ?
            products.map(
              item => <Item key={item._id} product={item}/>
            )
            : <Spinner/>
        }
      </div>
    </section>
  )
}

export default Llamadores