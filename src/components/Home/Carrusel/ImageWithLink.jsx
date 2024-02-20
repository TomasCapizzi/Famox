import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection'

function ImageWithLink({id,linkText, linkRef, imageRoute}) {

    const {isIntersecting, elementRef} = useIntersection({threshold: '0.7'});

  return (
    <li id={id}>
        <a ref={elementRef} className={isIntersecting? 'in' : 'out'} href={linkRef} target='_blank' rel="noreferrer">{linkText}</a>
        <img src={imageRoute} alt="Carrusel 3" />
    </li>
  )
}

export default ImageWithLink