import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="home-hero">
      <div className="home-hero__overlay"></div>

      <div className="home-hero__content">
        <span className="home-hero__eyebrow">
          {t("home.hero.eyebrow")}
        </span>

        <h1 className="home-hero__title">
          {t("home.hero.title1")}
          <span>{t("home.hero.title2")}</span>
        </h1>

        <p className="home-hero__description">
          {t("home.hero.description")}
        </p>

        <div className="home-hero__actions">
          <Link
            to="/productos"
            className="home-hero__button home-hero__button--primary"
          >
            {t("home.hero.products")}
            <span>→</span>
          </Link>

          <Link
            to="/nosotros"
            className="home-hero__button home-hero__button--secondary"
          >
            {t("home.hero.about")}
          </Link>
        </div>
      </div>

      <div className="home-hero__quality">
        <span className="home-hero__quality-title">
          {t("home.hero.quality")}
        </span>

        <span>ISO 9001:2015</span>
        <span>ISO 13485:2019</span>
        <span>ANMAT</span>
      </div>
    </section>
  );
};

export default Hero;