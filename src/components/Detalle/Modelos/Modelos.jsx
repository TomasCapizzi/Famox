import React, {useEffect, useState} from 'react'

import ModeloItem from './ModeloItem';
import Spinner from '../../Spinner/Spinner';

function Modelos({modelo}) {

    const [modelos, setModelos] = useState([]);
    console.log(modelo);
    const api = 'https://famox-api.herokuapp.com/api/products/modelos'
    async function getModelos(){
        const response = await fetch(api);
        const res = await response.json();
        console.log(res.products);
        setModelos(res.products);
    }

    useEffect(()=>{
        getModelos()
    },[])

  return (
    <article className='modelos'>
        {
            modelos.length > 0 ? 
                modelo === 'Recipiente Colector' ?
                    <div className='container'>
                        {
                            modelos.map(
                                item => item.origen === 'recipiente_colector' && <ModeloItem item={item} key={item._id} />
                            )
                        }
                    </div>
                :
                    <div className='container'>
                        {
                            modelos.map(
                                item => item.origen === 'mezclador' && <ModeloItem item={item} key={item._id} />
                            )
                        }
                    </div>
            : <Spinner />
        }
    </article>
  )
}

export default Modelos