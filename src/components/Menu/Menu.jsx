import React, {useContext, useEffect, useRef} from 'react';
import {RiShoppingCart2Line, RiShoppingCartFill} from 'react-icons/ri';

import { CarritoContext } from 'store/carritoContext';
import {CgMenuGridR} from 'react-icons/cg';
import {Link} from 'react-router-dom';
import Links from './Links';
import LinksResponsive from './LinksResponsive'

function Menu() {
  const menuUl = useRef();
  const {carro, obtenerDataLocalStorage} = useContext(CarritoContext);


  function useMenuHamb(){
    menuUl.current.classList.toggle('on')
  }
  
  useEffect(()=>{
    obtenerDataLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  return (
    <nav className='menu'>
      <Link to={'/'}>
        <img src="img/Logo.png" alt="Logo Famox" />
      </Link>
      <div className='responsive-menu'>
        <Link to='/carrito' className='carrito-responsive' aria-label='Carro de compras'>
          <ul>
            <li className='carrito'>{
                carro.length > 0 ? <RiShoppingCartFill/> : <RiShoppingCart2Line/>
            }
            {
                carro.length === 0 ?
                null : <p>{carro.length}</p>
            }
            </li>
          </ul>
        </Link>
        <CgMenuGridR className='menu-hamb' onClick={useMenuHamb}/>       
      </div>
      <LinksResponsive menuUl={menuUl} useMenuHamb={useMenuHamb} />
      <Links carro={carro} />
    </nav>
  )
}

export default Menu;
