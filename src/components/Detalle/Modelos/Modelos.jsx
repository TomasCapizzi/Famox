import ModeloItem from './ModeloItem';
import React from 'react'
import Spinner from 'components/Spinner/Spinner';

function Modelos({modelos}) {
    console.log(modelos);
  return (
    <article className='modelos'>
        <h3>Modelos</h3>
        <div>
            {
                modelos.length > 0 ? 
                    modelos.map(
                        item => <ModeloItem item={item} key={item._id} />
                    )
                : <Spinner />
            }
        </div>

    </article>
  )
}

export default Modelos
