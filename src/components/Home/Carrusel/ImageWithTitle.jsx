import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection';

function ImageWithTitle({id,title, linkText, linkRef, imageRoute}) {
    const {isIntersecting, elementRef} = useIntersection({threshold: '0.7'});

  return (
    <li id={id} className='carruselImgTitle'>
        <div ref={elementRef} className={isIntersecting? 'in' : 'out'}>
            <h3>{title}</h3>
            <a href={linkRef} target='_blank' rel="noreferrer">{linkText}</a>
        </div>                
        <img src={imageRoute} alt="Imagen de Carrusel" />
    </li>
  )
}

export default ImageWithTitle