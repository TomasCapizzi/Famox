import React,{useEffect} from 'react';

import {Helmet} from 'react-helmet-async';
import Obra from 'components/Obras/Obra';
import useListaObras from 'hooks/obras/useListaObras';
import Spinner from 'components/Spinner/Spinner';
import { useTranslation } from 'react-i18next';

function Obras() {
    const {getObras, obras} = useListaObras();
    useEffect(()=>{
        getObras();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const {t} = useTranslation();

  return (
    <div className='obras-pagina'>
        <Helmet>
            <title>Obras</title>
            <meta name="description" content="Algunas de las obras que realizamos para nuestros clientes. Priorizando siempre la calidad y brindando el mejor servicio." />
        </Helmet>
        <h1>{t("menu.link7")}</h1>
        <section className='obras-container'>
            {
                obras.length > 0 ?
                    obras.map(
                        obra => <Obra key={obra.obra} obra={obra}/>
                    )
                : <Spinner/>
            }
        </section>
    </div>
  )
}

export default Obras