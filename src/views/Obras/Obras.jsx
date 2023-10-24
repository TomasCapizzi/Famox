import React,{useEffect} from 'react';

import {Helmet} from 'react-helmet';
import Obra from 'components/Obras/Obra';
import useListaObras from 'hooks/obras/useListaObras';
import Spinner from 'components/Spinner/Spinner';

function Obras() {
    const {getObras, obras} = useListaObras();
    useEffect(()=>{
        getObras();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                : <Spinner/>
            }
        </section>
    </div>
  )
}

export default Obras