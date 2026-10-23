
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Fabricacion = () => {
  const { t } = useTranslation();

  const etapas = [
    "mecanizado",
    "ensamble",
    "ensayos",
    "trazabilidad",
  ];

  return (
    <section className="home-fabricacion">
      <div className="home-fabricacion__container">
        <div className="home-fabricacion__image">
          <img
            src="/img/Home/Fabricacion/fabricacion.webp"
            alt={t("home.fabricacion.imageAlt")}
            loading="lazy"
          />
        </div>

        <div className="home-fabricacion__content">
          <span className="home-fabricacion__eyebrow">
            {t("home.fabricacion.eyebrow")}
          </span>

          <h2>{t("home.fabricacion.title")}</h2>

          <p>{t("home.fabricacion.description")}</p>

          <div className="home-fabricacion__steps">
            {etapas.map((etapa, index) => (
              <div
                className="home-fabricacion__step"
                key={etapa}
              >
                <span className="home-fabricacion__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{t(`home.fabricacion.${etapa}`)}</span>
              </div>
            ))}
          </div>

          <Link
            to="/nosotros"
            className="home-fabricacion__link"
          >
            {t("home.fabricacion.link")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Fabricacion;
