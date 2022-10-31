import React, {useEffect} from 'react';

import Descripcion from 'components/Detalle/Gasoterapia/Descripcion/Descripcion';
import ManualBtn from 'components/Detalle/ManualBtn';
import Modelos from 'components/Detalle/Modelos/Modelos';
import Spinner from 'components/Spinner/Spinner';
import useListaProductos from 'hooks/productos/useListaProductos';

function Llamadores() {
    const api = 'http://famox-env.eba-8tvz54ez.sa-east-1.elasticbeanstalk.com/api/products/llamadores';
    const {getProducts, products} = useListaProductos();

    useEffect(()=>{
        getProducts(api);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <section className='producto-container'>
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