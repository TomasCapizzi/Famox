
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RedesSociales from 'components/RedesSociales/RedesSociales';

function Footer() {
  const { t } = useTranslation();
  const anio = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__container">

        <div className="site-footer__grid">

          {/* EMPRESA */}
          <div className="site-footer__brand">
            <Link to="/" aria-label="Famox - Inicio">
              <img
                src="/img/Logo.png"
                alt="Famox"
                className="site-footer__logo"
              />
            </Link>

            <p>{t("footer.description")}</p>
            <div className='rrss-container'><RedesSociales/></div>
          </div>

          {/* NAVEGACIÓN */}
          <nav className="site-footer__column"
               aria-label={t("footer.navigation")}>
            <h3>{t("footer.navigation")}</h3>

            <Link to="/nosotros">
              {t("footer.left.sub1")}
            </Link>

            <Link to="/obras">
              {t("footer.projects")}
            </Link>

            <Link to="/certificaciones">
              {t("footer.certifications")}
            </Link>

            <Link to="/preguntas-frecuentes">
              {t("footer.left.sub2")}
            </Link>
          </nav>

          {/* PRODUCTOS */}
          <nav className="site-footer__column"
               aria-label={t("footer.products")}>
            <h3>{t("footer.products")}</h3>

            <Link to="/unidades-de-suministro">
              {t("footer.supplyUnits")}
            </Link>

            <Link to="/gasoterapia">
              {t("footer.gasTherapy")}
            </Link>

            <Link to="/equipos-digitales">
              {t("footer.digitalEquipment")}
            </Link>

            <a
              href="/catalogo/Catalogo-Famox.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.left.sub4")}
            </a>
          </nav>

          {/* CONTACTO */}
          <div className="site-footer__column">
            <h3>{t("footer.right.title")}</h3>

            <p>{t("footer.right.sub1")}</p>
            <p>{t("footer.right.sub2")}</p>
            <p>{t("footer.right.sub3")}</p>

            <Link
              to="/contacto"
              className="site-footer__contact-link"
            >
              {t("footer.contactButton")} ↗
            </Link>
          </div>

        </div>

        <div className="site-footer__bottom">
          <span>
            © {anio} Famox S.A.
            {" · "}
            {t("footer.rights")}
          </span>

          <span>Argentina</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
