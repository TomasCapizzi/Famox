import React from 'react';

import EleccionesContainer from './Eleccion/EleccionesContainer';
import Descripcion from './Eleccion/Descripcion';
import useIntersection from 'hooks/intersectionObserver/useIntersection'


function Item({item}) {

  const {isIntersecting, elementRef} = useIntersection({});

  return (
    <div ref={elementRef} className={isIntersecting ? 'item-ecom in' : 'item-ecom out'}>
      <Descripcion item={item}/>
      <EleccionesContainer item={item}/>
    </div>
  )
}

export default Item;