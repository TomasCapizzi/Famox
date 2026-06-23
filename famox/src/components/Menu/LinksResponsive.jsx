import {Link} from 'react-router-dom';
import MenuCategoriasResponsive from './MenuCategoriasResponsive';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';


function LinksResponsive({menuUl, useMenuHamb}) {
  const {t} = useTranslation();
  return (
    <ul className='responsive' ref={menuUl}>
        <Link to='/'>
        <li onClick={useMenuHamb}>{t("menu.link1")}</li>
        </Link>
        <a className='menu-catalogo' href='https://www.famox.com.ar/catalogo/Catalogo-Famox.pdf' target='_blank' rel="noreferrer">
          <li>{t("menu.link2")}</li>
        </a>
        <Link  to='/ecommerce'>
        <li onClick={useMenuHamb}>{t("menu.link3")}</li>
        </Link>
        <Link to='/nosotros'>
        <li onClick={useMenuHamb}>{t("menu.link4")}</li>            
        </Link>
        <MenuCategoriasResponsive useMenuHamb={useMenuHamb} />
        <Link  to='/certificaciones'>
        <li onClick={useMenuHamb}>{t("menu.link6")}</li>            
        </Link>
        <Link  to='/obras'>
        <li onClick={useMenuHamb}>{t("menu.link7")}</li>            
        </Link>
        <Link  to='/contacto'>
        <li onClick={useMenuHamb}>{t("menu.link8")}</li>
        </Link>    
        <LanguageSelector/>      
    </ul>
  )
}

export default LinksResponsive