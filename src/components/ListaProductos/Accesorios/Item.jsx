import React from 'react'

function Item({product}) {
  return (
    <article className='accesorio'>
        <img src={product.img} alt="accesorio" />
        <div>
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
        </div>
    </article>
  )
}

export default Item