import {IoMdOpen} from 'react-icons/io'
import {Link} from 'react-router-dom';
import React from 'react';

function Item({product}) {

  return(
    <div className='item'>
        <h3>{product.nombre}<IoMdOpen/> </h3>
        <Link to={'/unidades-de-suministro/' + product._id}>
          <img src={product.img} alt="item" />
        </Link>
    </div>
  )
}

export default Item;
