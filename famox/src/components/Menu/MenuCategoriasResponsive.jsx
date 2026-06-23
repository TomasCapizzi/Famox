import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MenuCategoriasResponsive({useMenuHamb}) {
  const {t} = useTranslation()
  return (
    <ul className='categorias-handler'>
        <Link  to='/productos'><li onClick={useMenuHamb}>{t("menu.link5")}</li></Link>
        <ul className='categorias'>
          <Link to='/gasoterapia'><li onClick={useMenuHamb}>{t("home.categorias.b")}</li></Link>
          <Link to='/unidades-de-suministro'><li onClick={useMenuHamb}>{t("home.categorias.a")}</li></Link>
          <Link to='/accesorios'><li onClick={useMenuHamb}>{t("home.categorias.c")}</li></Link>
          <Link to='/equipos-digitales'><li onClick={useMenuHamb}>{t("home.categorias.d")}</li></Link>
        </ul>
    </ul>
  )
}

export default MenuCategoriasResponsive