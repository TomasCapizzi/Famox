import React, {useEffect, useState} from 'react';

import Spinner from '../../Spinner/Spinner';
import {useParams} from 'react-router-dom';

function DetalleUnidSum() {
    const {id} = useParams()
    console.log(id);

    const [product, setProduct] = useState([]);
    const [handler, setHandler] = useState(false)

    const api = 'https://famox-api.herokuapp.com/api/products/unidades-suministro/'

    async function getItem(){
        const response = await fetch(api + id);
        const res = await response.json()
        console.log(res);
        setProduct(res)
        setHandler(true)
    }

    useEffect(()=>{
        getItem();
    },[])
  return(
    <section className='producto2-container'>
      {
        handler ?
        <article className='producto'>
          <h1>{product.nombre}</h1>
          <div className='info-producto'>
            <div className='img-container'>
              <img src={product.img} alt="" />
            </div>
            <div className='uso'>
              <div>
                <h4>Uso Previsto</h4>
                <p>{product.uso}</p>
              </div>
              <div>
                <h4>A.N.M.A.T</h4>
                <p>{
                  product.anmat ? 'Considerado Producto Médico por el organismo.' : 'Este equipo no es considerado Producto Médico por el organismo.'  
                }</p>
              </div>
            </div>
          </div>
        </article>
        :
        <Spinner/>
      }
    </section>
  )
}

export default DetalleUnidSum;
