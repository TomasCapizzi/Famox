
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Calidad = () => {
  const { t } = useTranslation();

  return (
    <section className="home-calidad">
      <div className="home-calidad__container">

        <div className="home-calidad__intro">
          <span className="home-calidad__eyebrow">
            {t("home.calidad.eyebrow")}
          </span>

          <h2>{t("home.calidad.title")}</h2>

          <p>{t("home.calidad.description")}</p>
        </div>

        <div className="home-calidad__certifications">
            <div className="home-calidad__item">
                <div className="home-calidad__logo">
                <img
                    src="/img/Certificaciones/IRAM9001.webp"
                    alt="IRAM e IQNet - ISO 9001:2015"
                    loading="lazy"
                />
                </div>

                <h3>ISO 9001</h3>
                <p>{t("home.calidad.iso9001")}</p>
            </div>

            <div className="home-calidad__item">
                <div className="home-calidad__logo">
                <img
                    src="/img/Certificaciones/IRAM13485.webp"
                    alt="IRAM e IQNet - ISO 13485:2019"
                    loading="lazy"
                />
                </div>

                <h3>ISO 13485</h3>
                <p>{t("home.calidad.iso13485")}</p>
            </div>

            <div className="home-calidad__item">
                <div className="home-calidad__logo">
                <img
                    src="/img/Certificaciones/ANMAT.webp"
                    alt="ANMAT - Administración Nacional de Medicamentos, Alimentos y Tecnología Médica"
                    loading="lazy"
                />
                </div>

                <h3>ANMAT</h3>
                <p>{t("home.calidad.anmat")}</p>
            </div>
        </div>


        <Link to="/certificaciones" className="home-calidad__link">
          {t("home.calidad.link")}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Calidad;
