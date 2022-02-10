import {Link} from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md'
import React from 'react';

function Menu() {

  return (
    <nav className='menu'>
      <Link to={'/'}>
        <img src="img/Logo_WP.jpg" alt="Logo Famox" />
      </Link>
        <ul>
            <Link to='/'>
              <li>Famox</li>
            </Link>
            <Link  to='/ecommerce'>
              <li>Ecommerce</li>
            </Link>
            <Link to='/nosotros'>
              <li>Nosotros</li>            
            </Link>
              <div className='categorias-handler'>
                <Link  to='/productos'><li>Productos <MdKeyboardArrowDown/></li></Link>
                <div className='categorias'>
                  <Link to='/gasoterapia'><li>Gasoterapia</li></Link>
                  <Link to='/unidades-de-suministro'><li>Unidades de Suministro</li></Link>
                  <Link to='/accesorios'><li>Accesorios</li></Link>
                </div>
              </div>
            <Link  to='/certificaciones'>
              <li>Certificaciones</li>            
            </Link>
            <Link  to='/contacto'>
              <li>Contacto</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Menu;
