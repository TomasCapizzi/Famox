import React, {useEffect, useState} from 'react';

import Categoria from '../../components/Ecommerce/Categoria/Categoria';
import Filtro from '../../components/Ecommerce/Filtro/Filtro';
import Spinner from '../../components/Spinner/Spinner';

function Ecommerce() {

  const [listadoProductos, setListadoProductos] = useState([]);

  const [gasoterapiaHandler, setGasoterapiaHandler] = useState(true);
  const [unidSumHandler, setUnidSumHandler] = useState(true)

  const [handler, setHandler] = useState(false);
 
  async function getAllProducts(){
    const response = await fetch('https://famox-api.herokuapp.com/api/products/listado');
    const res = await response.json();
    setListadoProductos(res.products)
    setHandler(true)
  }


  useEffect(()=>{   
    getAllProducts(); 
  },[]);

  return (
    <section className='container-ecommerce'>
      <h1>Nuestro Ecommerce</h1>
      <div className='ecommerce'>
        <Filtro setGasoterapiaHandler={setGasoterapiaHandler} setUnidSumHandler={setUnidSumHandler} setHandler={setHandler}  />
        <article className='categorias'>
            {
              handler ? 
              <>
                {gasoterapiaHandler ? <Categoria items={listadoProductos.gasoterapia} key={listadoProductos.gasoterapia}/> : null}
                {unidSumHandler? <Categoria items={listadoProductos.unidadesSuministro} key={listadoProductos.unidadesSuministro}/> : null}
                </>

              : <Spinner/>
            }
        </article>
      </div>
    </section>
  )
}

export default Ecommerce