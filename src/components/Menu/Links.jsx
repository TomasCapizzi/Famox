import {RiShoppingCart2Line, RiShoppingCartFill} from 'react-icons/ri';

import {Link} from 'react-router-dom';
import MenuCategorias from './MenuCategorias';
import React from 'react';

function Links({carro}) {

  return (
    <ul className='links'>
        <Link to='/'>
        <li>Famox</li>
        </Link>
        <Link  to='/ecommerce'>
        <li>Ecommerce</li>
        </Link>
        <Link to='/nosotros'>
        <li>Nosotros</li>            
        </Link>
        <MenuCategorias/>
        <Link  to='/certificaciones'>
        <li>Certificaciones</li>            
        </Link>
        <Link  to='/obras'>
        <li>Obras</li>
        </Link>
        <Link  to='/contacto'>
        <li>Contacto</li>
        </Link>
        <Link to='/carrito' aria-label='Carro de compras' >
        <li className='carrito'>{
            carro.length > 0 ? <RiShoppingCartFill/> : <RiShoppingCart2Line/>
        }
        {
            carro.length === 0 ?
            null : <p>{carro.length}</p>
        }
        </li>
        </Link>   
    </ul>
  )
}

export default Links