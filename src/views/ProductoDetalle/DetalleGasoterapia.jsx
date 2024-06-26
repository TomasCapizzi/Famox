import React, {useEffect} from 'react';

import Conectores from 'components/Detalle/Gasoterapia/Descripcion/Conectores';
import Descripcion from 'components/Detalle/Gasoterapia/Descripcion/Descripcion';
import Gases from 'components/Detalle/Gasoterapia/Descripcion/Gases';
import {Helmet} from 'react-helmet';
import ManualBtn from 'components/Detalle/ManualBtn';
import Modelos from 'components/Detalle/Modelos/Modelos';
import Spinner from 'components/Spinner/Spinner';
import useDetalle from 'hooks/productos/useDetalle';
import {useParams} from 'react-router-dom';
import Volver from 'components/Volver/Volver';

function DetalleGasoterapia() {

    const {id} = useParams();

    const {getItem, product, handler} = useDetalle();

    const api = 'https://famox-api.vercel.app/api/products/gasoterapia/';

    useEffect(()=>{
      getItem(api, id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  return(
    <section className='producto-container'>
      <Helmet>
        <title>{product.nombre}</title>
        <meta name="description" content={product.nombre + ': ' + product.uso} />
      </Helmet>
        {
          handler ?
            <article className='producto'>
              <h1>{product.nombre}</h1>
              <ManualBtn product={product}/>
              <Volver link={'/gasoterapia'}/>
              <div className='info-producto'>
                <div className='img-container'>
                  <img src={product.img} alt={`producto ${product.nombre}`} />
                </div>
                <Descripcion product={product} />
              </div>
              {/*
                product.gas && <Gases product={product.gases_} />
              */}
              {
                product.conectores && <Conectores product={product.conectores} />
              }
              {
                product.modelos_ && <Modelos modelos={product.modelos_}  />
              }
            </article>
          :
          <Spinner />
        }
    </section>
  )
}

export default DetalleGasoterapia;
