import ModeloItem from './ModeloItem';
import React from 'react'
import Spinner from 'components/Spinner/Spinner';

function Modelos({modelos}) {

  return (
    <article className='modelos'>
        <h4>Modelos</h4>
        <div className='modelo-info'>
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
