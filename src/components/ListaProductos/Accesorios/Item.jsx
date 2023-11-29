import ManualBtn from 'components/Detalle/ManualBtn'
import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection'

function Item({product}) {

  const {isIntersecting, elementRef} = useIntersection({})

  return (
    <article className={isIntersecting ? 'accesorio in' : 'accesorio out'} ref={elementRef}>
      {product.manual && <ManualBtn product={product} />}
      <div className='acc-img'>
        <img src={product.img} alt={"accesorio " + product.nombre } />
      </div>
      <div className='acc-descrip'>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
      </div>
    </article>
  )
}

export default Item