import React,{useEffect, useState} from 'react';

import {Helmet} from 'react-helmet';
import Obra from 'components/Obras/Obra';

function Obras() {

    const [obras, setObras] = useState([])

    const getObras = async ()=> {
        const response = await fetch('https://api.famox.com.ar/api/products/obras');
        const res = await response.json();
        setObras(res.products);
    }
    useEffect(()=>{
        getObras();
    },[])

  return (
    <div className='obras-pagina'>
        <Helmet>
            <title>Obras</title>
            <meta name="description" content="Algunas de las obras que realizamos para nuestros clientes. Priorizando siempre la calidad y brindando el mejor servicio." />
        </Helmet>
        <h1>Obras</h1>
        <section className='obras-container'>
            {
                obras.length > 0 ?
                    obras.map(
                        obra => <Obra key={obra._id} obra={obra}/>
                    )
                : null
            }
        </section>
    </div>
  )
}

export default Obras