import React, {useEffect} from 'react';

import {Helmet} from 'react-helmet-async';
import Item from 'components/ListaProductos/UnidadesSuministro/Item';
import Spinner from 'components/Spinner/Spinner';
import useListaProductos from 'hooks/productos/useListaProductos';
import { useTranslation } from 'react-i18next';

function UnidadesSuministro() {
  const api = 'https://famox-api.vercel.app/api/products/unidades-suministro'
  const {getProducts, products} = useListaProductos();
  const {t} = useTranslation();
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
      <h1>{t("home.categorias.a")}</h1>
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
