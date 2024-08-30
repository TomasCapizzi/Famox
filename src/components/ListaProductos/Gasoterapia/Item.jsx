import {IoMdOpen} from 'react-icons/io'
import {Link} from 'react-router-dom';
import React from 'react';

function Item({product}) {

  return(
    <div className='item'>
      <div className='item-container'>
        <Link to={'/gasoterapia/' + product._id}>
          <img src={product.img} loading='lazy' alt={"equipo " + product.nombre} />
        </Link>
        <Link to={'/gasoterapia/' + product._id}>
          <h3>{product.nombre}</h3>
        </Link>
      </div>
    </div>
  )
}

export default Item;
