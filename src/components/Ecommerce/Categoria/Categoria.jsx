import Item from '../Item/Item';
import React from 'react'

function Categoria({items}) {

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