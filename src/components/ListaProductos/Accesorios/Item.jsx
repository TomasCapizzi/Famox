import ManualBtn from 'components/Detalle/ManualBtn'
import React from 'react'

function Item({product}) {
  return (
    <article className='accesorio'>
      {product.manual && <ManualBtn product={product} />}
      <div>
        <img src={product.img} alt="accesorio" />
      </div>
      <div className='acc-descrip'>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
      </div>
    </article>
  )
}

export default Item