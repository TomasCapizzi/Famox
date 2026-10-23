
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ContactoCTA() {
  const { t } = useTranslation();

  return (
    <section className="home-contacto">
      <div className="home-contacto__container">
        <span className="home-contacto__eyebrow">
          {t("home.contactoCTA.eyebrow")}
        </span>

        <h2>{t("home.contactoCTA.title")}</h2>

        <p>{t("home.contactoCTA.description")}</p>

        <Link to="/contacto" className="home-contacto__button">
          {t("home.contactoCTA.button")}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}

export default ContactoCTA;
