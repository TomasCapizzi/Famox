import {Link} from 'react-router-dom'
import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const {t} = useTranslation();
  return (
    <footer>
      <div className='footer-cabecera'>
        <img src="/img/Logo.png" alt="logo famox" />
      </div>
      <div className='footer-info'>
        <div className='footer-links'>
          <h5>{t("footer.left.title")}</h5>
          <Link to='/nosotros'>
            <p>{t("footer.left.sub1")}</p>
          </Link>

          <Link to='/preguntas-frecuentes'>
            <p>{t("footer.left.sub2")}</p>
          </Link>

          <Link to='/productos'>
            <p>{t("footer.left.sub3")}</p>
          </Link>

          <Link to='/catalogo/Catalogo-Famox.pdf'>
            <p>{t("footer.left.sub4")}</p>
          </Link>
        </div>
        <div className='footer-contacto'>
          <h5>{t("footer.right.title")}</h5>
          <p>{t("footer.right.sub1")}</p>
          <p>{t("footer.right.sub2")}</p>
          <p>{t("footer.right.sub3")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
