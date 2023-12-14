import React, {useEffect} from 'react';

import {Helmet} from 'react-helmet';
import Item from 'components/ListaProductos/Accesorios/Item'
import Spinner from 'components/Spinner/Spinner';
import useListaAccesorios from 'hooks/productos/useListaAccesorios';

function Accesorios() {
  const api = 'https://famox-api.vercel.app/api/products/accesorios';

  const {getAccesorios, accesorios} = useListaAccesorios()

  useEffect(()=>{
    getAccesorios(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <section className='accesorios'>
      <Helmet>
        <title>Accesorios</title>
        <meta name="description" content="Todos los accesorios para nuestros productos, conectores, unidades terminales, soportes, bandejas y mucho mas" />
      </Helmet>
      <h1>Accesorios</h1>
      <div>
        {
          accesorios.length > 0 ? 
            accesorios.map(
              item => <Item key={item._id} product={item} />
            )
          : <Spinner/>
        }
      </div>
    </section>
  )
}

export default Accesorios;