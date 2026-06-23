import {RiShoppingCart2Line, RiShoppingCartFill} from 'react-icons/ri';

import {Link} from 'react-router-dom';
import MenuCategorias from './MenuCategorias';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Links({carro}) {
  const {t} = useTranslation();
  return (
    <ul className='links'>
        <Link to='/'>
        <li>{t("menu.link1")}</li>
        </Link>
        <a className='menu-catalogo' href='https://www.famox.com.ar/catalogo/Catalogo-Famox.pdf' target='_blank' rel="noreferrer">
          <li>{t("menu.link2")}</li>
        </a>
        <Link  to='/ecommerce'>
        <li>{t("menu.link3")}</li>
        </Link>
        <Link to='/nosotros'>
        <li>{t("menu.link4")}</li>            
        </Link>
        <MenuCategorias/>
        <Link  to='/certificaciones'>
        <li>{t("menu.link6")}</li>            
        </Link>
        <Link  to='/obras'>
        <li>{t("menu.link7")}</li>
        </Link>
        <Link  to='/contacto'>
        <li>{t("menu.link8")}</li>
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
        <LanguageSelector/>
    </ul>
  )
}

export default Links