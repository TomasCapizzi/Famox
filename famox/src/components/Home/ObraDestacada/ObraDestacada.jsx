
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ObraDestacada = () => {
  const { t } = useTranslation();

  return (
    <section className="home-obra">
      <div className="home-obra__image">
        <img
          src="/img/Home/obra.webp"
          alt="Equipamiento hospitalario en Swiss Medical Nordelta"
          loading="lazy"
        />
      </div>

      <div className="home-obra__overlay" />

      <div className="home-obra__content">
        <span className="home-obra__eyebrow">
          {t("home.obraDestacada.eyebrow")}
        </span>

        <h2>
          Swiss Medical
          <span>Sede Nordelta</span>
        </h2>

        <p>{t("home.obraDestacada.description")}</p>

        <Link
          to="/obras/swiss-medical-nordelta"
          className="home-obra__button"
        >
          {t("home.obraDestacada.button")}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
};

export default ObraDestacada;
