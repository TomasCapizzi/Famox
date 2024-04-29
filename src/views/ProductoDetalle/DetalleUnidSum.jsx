import React, {useEffect} from 'react';

import Descripcion from 'components/Detalle/UnidSum/Descripcion';
import {Helmet} from 'react-helmet';
import ManualBtn from 'components/Detalle/ManualBtn';
import Spinner from '../../components/Spinner/Spinner';
import useDetalle from 'hooks/productos/useDetalle';
import {useParams} from 'react-router-dom';

function DetalleUnidSum() {
    const {id} = useParams();
    const {getItem, product, handler} = useDetalle();
    const api = 'https://famox-api.vercel.app/api/products/unidades-suministro/'


    useEffect(()=>{
        getItem(api, id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return(
    <section className='producto2-container'>
      <Helmet>
        <title>{product.nombre}</title>
        <meta name="description" content={product.nombre + ': ' + product.uso} />
      </Helmet>
      {
        handler ?
        <article className='producto'>
          <h1>{product.nombre}</h1>
          <ManualBtn product={product} />
          <div className='info-producto'>
            <div className='img-container'>
              <img src={product.img} alt="producto" />
            </div>
            <Descripcion product={product}/>
          </div>
        </article>
        :
        <Spinner/>
      }
    </section>
  )
}

export default DetalleUnidSum;
