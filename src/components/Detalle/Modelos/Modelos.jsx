import React from 'react'

import ModeloItem from './ModeloItem';
import Spinner from '../../Spinner/Spinner';

function Modelos({modelos}) {
    console.log(modelos);
  return (
    <article className='modelos'>
        {
            modelos.length > 0 ? 
                modelos.map(
                    item => <ModeloItem item={item} key={item._id} />
                )
            : <Spinner />
        }
    </article>
  )
}

export default Modelos
