import Item from '../Item/Item';
import React from 'react'

function Categoria({items}) {

  items.sort((a,b) => a.orden - b.orden)

  return (
    <article className='categoria'>
        {
            items.map(
                item=> <Item item={item} key={item._id} />
            )
        }
    </article>
  )
}

export default Categoria