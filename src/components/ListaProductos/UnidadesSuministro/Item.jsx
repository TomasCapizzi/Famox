import {Link} from 'react-router-dom';
import React from 'react';

function Item({product}) {

  return(
    <div className='item'>
      <div className='item-container'>
        <Link to={'/unidades-de-suministro/' + product._id}>
          <img src={product.img} alt={"equipo " + product.nombre} loading='lazy' />
        </Link>
        <Link to={'/unidades-de-suministro/' + product._id}>
        <h3>{product.nombre}</h3>
        </Link>
      </div>        
    </div>
  )
}

export default Item;
