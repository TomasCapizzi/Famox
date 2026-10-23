import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Soluciones = () => {
  const { t } = useTranslation();

  const soluciones = [
    {
      key: "unidades",
      image: "/img/Categorias/unidades-suministro.webp",
      link: "/unidades-de-suministro",
    },
    {
      key: "gasoterapia",
      image: "/img/Categorias/gasoterapia.webp",
      link: "/gasoterapia",
    },
    {
      key: "digitales",
      image: "/img/Categorias/equipos-digitales.webp",
      link: "/equipos-digitales",
    },
  ];

  return (
    <section className="home-soluciones">
      <div className="home-soluciones__container">

        <div className="home-soluciones__header">
          <span className="home-soluciones__eyebrow">
            {t("home.soluciones.eyebrow")}
          </span>

          <h2>
            {t("home.soluciones.title")}
          </h2>

          <p>
            {t("home.soluciones.description")}
          </p>
        </div>

        <div className="home-soluciones__grid">
          {soluciones.map((solucion) => (
            <Link
              to={solucion.link}
              className="home-soluciones__card"
              key={solucion.key}
            >
              <img
                src={solucion.image}
                alt={t(`home.soluciones.${solucion.key}`)}
              />

              <div className="home-soluciones__overlay" />

              <div className="home-soluciones__card-content">
                <h3>
                  {t(`home.soluciones.${solucion.key}`)}
                </h3>

                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/accesorios"
          className="home-soluciones__accessories"
        >
          {t("home.soluciones.accesorios")}
          <span>→</span>
        </Link>

      </div>
    </section>
  );
};

export default Soluciones;