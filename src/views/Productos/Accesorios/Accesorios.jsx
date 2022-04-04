import React, {useEffect, useState} from 'react';

import Item from '../../../components/ListaProductos/Accesorios/Item'
import Spinner from '../../../components/Spinner/Spinner';

function Accesorios() {
  const api = 'https://famox-api.herokuapp.com/api/products/accesorios';

  const [accesorios, setAccesorios] = useState([]);
  const [handler, setHandler] = useState(false)

  async function getAccesorios(){
    const response = await fetch(api);
    const res = await response.json();
    console.log(res.products);
    setAccesorios(res.products);
    setHandler(true);
  }

  useEffect(()=>{
    getAccesorios();
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