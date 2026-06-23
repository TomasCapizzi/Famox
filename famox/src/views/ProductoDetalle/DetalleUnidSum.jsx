import React, {useEffect} from 'react';

import Descripcion from 'components/Detalle/UnidSum/Descripcion';
import {Helmet} from 'react-helmet-async';
import ManualBtn from 'components/Detalle/ManualBtn';
import Spinner from '../../components/Spinner/Spinner';
import useDetalle from 'hooks/productos/useDetalle';
import {useParams} from 'react-router-dom';
import Volver from 'components/Volver/Volver';
import { useTranslation } from 'react-i18next';

function DetalleUnidSum() {
    const {id} = useParams();
    const { i18n } = useTranslation();
    const lang = i18n.language; 
    const {getItem, product, handler} = useDetalle();
    const api = 'https://famox-api.vercel.app/api/products/unidades-suministro/'


    useEffect(()=>{
        getItem(api, id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return(
    <section className='producto2-container'>
      <Helmet>
        <title>{String(product?.nombre?.[lang])}</title>
        <meta name="description" content={String(product?.uso?.[lang] || 'Descripción no disponible')} />
      </Helmet>
      {
        handler ?
        <article className='producto'>
          <h1>{product.nombre[lang]}</h1>
          <ManualBtn product={product} />
          <Volver link={'/unidades-de-suministro'}/>
          <div className='info-producto'>
            <div className='img-container'>
              <img src={product.img} alt="producto" />
            </div>
            <Descripcion product={product} lang={lang}/>
          </div>
        </article>
        :
        <Spinner/>
      }
    </section>
  )
}

export default DetalleUnidSum;
