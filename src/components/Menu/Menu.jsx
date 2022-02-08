import {Link} from 'react-router-dom';
import React from 'react';

function Menu() {

  return (
    <nav className='menu'>
      <Link to={'/'}>
        <img src="img/Logo_WP.jpg" alt="Logo Famox" />
      </Link>
        <ul>
            <li>Famox</li>
            <li>Ecommerce</li>
            <li>Nosotros</li>
            <li>Productos</li>
            <li>Certificaciones</li>
            <li>Contacto</li>
        </ul>
    </nav>
  )
}

export default Menu;
