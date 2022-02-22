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
    const [poseeModelos, setPoseeModelos] = useState(false);

    const api = 'https://famox-api.herokuapp.com/api/products/gasoterapia/';

    async function getItem(){
      console.log(api+id);
        const response = await fetch(api + id);
        const res = await response.json();
        console.log(res);
        setProduct(res)
        setHandler(true);
        if(res.nombre === 'Recipiente Colector' || res.nombre === 'Mezclador de Aire/Oxígeno' ){
          setPoseeModelos(true)
        }
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
                product.gas && <Gases product={product} />
              }
              {
                product.conexion && <Conectores product={product} />
              }
              {
                product.modelos && <Modelos modelo={product.nombre}/>
              }
            </article>
          :
          <Spinner />
        }
    </section>
  )
}

export default DetalleGasoterapia;
