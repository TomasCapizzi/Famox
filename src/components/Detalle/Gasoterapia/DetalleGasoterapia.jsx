import React, {useEffect, useState} from 'react';

import Conectores from './Descripcion/Conectores';
import Descripcion from './Descripcion/Descripcion';
import Gases from './Descripcion/Gases';
import Modelos from '../Modelos/Modelos';
import Spinner from '../../Spinner/Spinner';
import {useParams} from 'react-router-dom';

function DetalleGasoterapia() {

    const {id} = useParams();


    const [product, setProduct] = useState([]);
    const [handler, setHandler] = useState(false);

    const api = 'https://famox-api.herokuapp.com/api/products/gasoterapia/';

    async function getItem(){
        const response = await fetch(api + id);
        const res = await response.json();
        setProduct(res)
        setHandler(true);
    }

    useEffect(()=>{
      getItem();
    },[])


  return(
    <section className='producto-container'>
        {
          handler ?
            <article className='producto'>
              <h1>{product.nombre}</h1>
              <div className='info-producto'>
                <div className='img-container'>
                  <img src={product.img} alt="producto" />
                </div>
                <Descripcion product={product} />
              </div>
              {
                product.gases_ && <Gases product={product.gases_} />
              }
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
