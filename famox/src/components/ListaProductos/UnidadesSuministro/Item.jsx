import {Link} from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Item({product}) {
  const { i18n } = useTranslation();
  const lang = i18n.language; 
  return(
    <div className='item'>
      <div className='item-container'>
        <Link to={'/unidades-de-suministro/' + product._id}>
          <img src={product.img} alt={"equipo " + product.nombre} loading='lazy' />
        </Link>
        <Link to={'/unidades-de-suministro/' + product._id}>
        <h3>{product.nombre[lang]}</h3>
        </Link>
      </div>        
    </div>
  )
}

export default Item;
