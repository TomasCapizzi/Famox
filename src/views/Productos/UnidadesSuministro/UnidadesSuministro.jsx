import React, {useEffect} from 'react';

import {Helmet} from 'react-helmet';
import Item from 'components/ListaProductos/UnidadesSuministro/Item';
import Spinner from 'components/Spinner/Spinner';
import useListaProductos from 'hooks/productos/useListaProductos';

function UnidadesSuministro() {
  const api = 'https://famox-api.vercel.app/api/products/unidades-suministro'
  const {getProducts, products} = useListaProductos();

  useEffect(()=>{
    getProducts(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <section className='categoria'>
      <Helmet>
        <title>Unidades de Suministro</title>
        <meta name="description" content="Nuestros equipos de unidades de suministro" />
        <meta name="keywords" content="panel de cabecera, ducto, unidad suministro" />
      </Helmet>
      <h1>Unidades de Suministro</h1>
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

export default UnidadesSuministro;
