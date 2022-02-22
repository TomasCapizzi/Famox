import Item from '../Item/Item';
import React from 'react'

function Busqueda({productos}) {
  return (
    <article className='busqueda'>
        {
            productos ?
                <div>
                    <p>Tu búsqueda</p>
                    {
                        productos.map(
                            item => <Item item={item} key={item._id} />
                        )
                    }
                </div>
            : null
        }
    </article>
  )
}

export default Busqueda;