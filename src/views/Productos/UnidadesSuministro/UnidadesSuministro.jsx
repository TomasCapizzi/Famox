import React, {useEffect} from 'react';

import Item from 'components/ListaProductos/UnidadesSuministro/Item';
import Spinner from 'components/Spinner/Spinner';
import useListaProductos from 'hooks/productos/useListaProductos';

function UnidadesSuministro() {
  const api = 'http://famox-env.eba-8tvz54ez.sa-east-1.elasticbeanstalk.com/api/products/unidades-suministro'
  const {getProducts, products} = useListaProductos();

  useEffect(()=>{
    getProducts(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <section className='categoria'>
      <h1>Unidades de Suministro</h1>
      <div className='items-container'>
                {
                    products.length>0 ?
                        products.map(
                            item => <Item key={item._id} product={item} />
                        )
                    : <Spinner/>
                }
            </div>

    </section>
  )
}

export default UnidadesSuministro;
