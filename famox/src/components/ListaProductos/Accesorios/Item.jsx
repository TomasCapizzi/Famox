import ManualBtn from 'components/Detalle/ManualBtn'
import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection'
import { useTranslation } from 'react-i18next';

function Item({product}) {
  const { i18n } = useTranslation();
  const lang = i18n.language;  
  const {isIntersecting, elementRef} = useIntersection({})
  console.log(product);
  
  return (
    <article className={isIntersecting ? 'accesorio in' : 'accesorio out'} ref={elementRef}>
      {product.manual && <ManualBtn product={product} />}
      <div className='acc-img'>
        <img src={product.img} alt={"accesorio " + product.nombre } loading='lazy' />
      </div>
      <div className='acc-descrip'>
          <h3>{product.nombre[lang]}</h3>
          <p>{product.descripcion[lang]}</p>
      </div>
    </article>
  )
}

export default Item