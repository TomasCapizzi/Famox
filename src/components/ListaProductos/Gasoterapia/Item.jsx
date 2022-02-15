import {IoMdOpen} from 'react-icons/io'
import {Link} from 'react-router-dom';
import React from 'react';

function Item({product}) {

  return(
    <div className='item'>
      <div>
        <h3>{product.nombre}</h3>
        <Link to={'/gasoterapia/' + product._id}>
          <IoMdOpen/>
        </Link>        
      </div>
      <Link to={'/gasoterapia/' + product._id}>
        <img src={product.img} alt="item" />
      </Link>
    </div>
  )
}

export default Item;
