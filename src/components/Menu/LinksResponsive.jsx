import {Link} from 'react-router-dom';
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
        <div className='categorias-handler'>
            <Link  to='/productos'><li onClick={useMenuHamb}>Productos</li></Link>
            <div className='categorias'>
            <Link to='/gasoterapia'><li onClick={useMenuHamb}>Gasoterapia</li></Link>
            <Link to='/unidades-de-suministro'><li onClick={useMenuHamb}>Unidades de Suministro</li></Link>
            <Link to='/accesorios'><li onClick={useMenuHamb}>Accesorios</li></Link>
            </div>
        </div>
        <Link  to='/certificaciones'>
        <li onClick={useMenuHamb}>Certificaciones</li>            
        </Link>
        <Link  to='/contacto'>
        <li onClick={useMenuHamb}>Contacto</li>
        </Link>
        {
          /*
        <Link  to='/login'>
          <li onClick={useMenuHamb}><FaUser/></li>
        </Link> 
          */
        }           
    </ul>
  )
}

export default LinksResponsive