import React, {useEffect} from 'react';

import Descripcion from 'components/Detalle/Gasoterapia/Descripcion/Descripcion';
import Spinner from '../../components/Spinner/Spinner';
import useDetalle from 'hooks/productos/useDetalle';
import {useParams} from 'react-router-dom';

function DetalleUnidSum() {
    const {id} = useParams();
    const {getItem, product, handler} = useDetalle();
    const api = 'http://famox-env.eba-8tvz54ez.sa-east-1.elasticbeanstalk.com/api/products/unidades-suministro/'


    useEffect(()=>{
        getItem(api, id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return(
    <section className='producto2-container'>
      {
        handler ?
        <article className='producto'>
          <h1>{product.nombre}</h1>
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
