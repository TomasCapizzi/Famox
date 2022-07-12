import React, {useEffect} from 'react';

import Item from 'components/ListaProductos/Accesorios/Item'
import Spinner from 'components/Spinner/Spinner';
import useListaAccesorios from 'hooks/productos/useListaAccesorios';

function Accesorios() {
  const api = 'http://famox-env.eba-8tvz54ez.sa-east-1.elasticbeanstalk.com/api/products/accesorios';

  const {getAccesorios, accesorios} = useListaAccesorios()

  useEffect(()=>{
    getAccesorios(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <section className='accesorios'>
      <h1>Accesorios</h1>
      <div>
        {
          accesorios.length > 0 ? 
            accesorios.map(
              item => <Item key={item._id} product={item} />
            )
          : <Spinner/>
        }
      </div>
    </section>
  )
}

export default Accesorios;