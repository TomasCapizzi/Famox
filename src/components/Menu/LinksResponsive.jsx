import {Link} from 'react-router-dom';
import MenuCategoriasResponsive from './MenuCategoriasResponsive';
import React from 'react';

function LinksResponsive({menuUl, useMenuHamb}) {

  return (
    <ul className='responsive' ref={menuUl}>
        <Link to='/'>
        <li onClick={useMenuHamb}>Famox</li>
        </Link>
        <Link  to='/ecommerce'>
        <li onClick={useMenuHamb}>Ecommerce</li>
        </Link>
        <Link to='/nosotros'>
        <li onClick={useMenuHamb}>Nosotros</li>            
        </Link>
        <MenuCategoriasResponsive useMenuHamb={useMenuHamb} />
        <Link  to='/certificaciones'>
        <li onClick={useMenuHamb}>Certificaciones</li>            
        </Link>
        <Link  to='/obras'>
        <li onClick={useMenuHamb}>Obras</li>            
        </Link>
        <Link  to='/contacto'>
        <li onClick={useMenuHamb}>Contacto</li>
        </Link>          
    </ul>
  )
}

export default LinksResponsive