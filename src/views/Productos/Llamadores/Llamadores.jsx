import React, {useEffect} from 'react';

import Descripcion from 'components/Detalle/Gasoterapia/Descripcion/Descripcion';
import {Helmet} from 'react-helmet';
import ManualBtn from 'components/Detalle/ManualBtn';
import Modelos from 'components/Detalle/Modelos/Modelos';
import Spinner from 'components/Spinner/Spinner';
import useListaProductos from 'hooks/productos/useListaProductos';

function Llamadores() {
    const api = 'https://famox-api.vercel.app/api/products/llamadores';
    const {getProducts, products} = useListaProductos();

    useEffect(()=>{
        getProducts(api);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <section className='producto-container'>
      <Helmet>
        <title>Llamadores de Enfermera</title>
        <meta name="description" content="Llamador de enfermera Yanward,equipos importado con múltiples prestaciones y accesorios. Realiza tu consulta para saber mas sobre este equipo." />
      </Helmet>
        {
            products[0] ?
            <article className='producto'>
              <h1>{products[0].nombre}</h1>
              <ManualBtn product={products[0]}/>
              <div className='info-producto'>
                <div className='img-container'>
                  <img src={products[0].img} alt="producto" />
                </div>
                <Descripcion product={products[0]} />
              </div>
              {
                products[0].modelos_ && <Modelos modelos={products[0].modelos_}  />
              }
            </article>

            : <Spinner/>
        }

    </section>
  )
}

export default Llamadores