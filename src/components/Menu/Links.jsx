import {RiShoppingCart2Line, RiShoppingCartFill} from 'react-icons/ri';

import {FaUser} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md';
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
        <Link to='/carrito' >
        <li className='carrito'>{
            carro.length > 0 ? <RiShoppingCartFill/> : <RiShoppingCart2Line/>
        }
        {
            carro.length === 0 ?
            null : <p>{carro.length}</p>
        }
        </li>
        </Link>
        {
          /*
        <Link  to='/login'>
          <li><FaUser/></li>
        </Link>   */
        }
          
    </ul>
  )
}

export default Links