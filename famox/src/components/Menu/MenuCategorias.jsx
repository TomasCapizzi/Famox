import {Link} from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md';
import React from 'react';
import { useTranslation } from 'react-i18next';

function MenuCategorias() {
  const {t} = useTranslation();
  return (
    <ul className='categorias-handler'>
        <Link  to='/productos'><li>{t("menu.link5")} <MdKeyboardArrowDown/></li></Link>
        <ul className='categorias'>
          <Link to='/gasoterapia'><li>{t("home.categorias.b")}</li></Link>
          <Link to='/unidades-de-suministro'><li>{t("home.categorias.a")}</li></Link>
          <Link to='/accesorios'><li>{t("home.categorias.c")}</li></Link>
          <Link to='/equipos-digitales'><li>{t("home.categorias.d")}</li></Link>
        </ul>
    </ul>
  )
}

export default MenuCategorias