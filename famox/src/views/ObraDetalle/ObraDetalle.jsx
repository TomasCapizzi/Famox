import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useListaObras from "hooks/obras/useListaObras";
import Spinner from "components/Spinner/Spinner";

const ObraDetalle = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const { obras, getObras } = useListaObras();
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let activo = true;

    const cargarObras = async () => {
      setCargando(true);
      setError(false);
      try {
        await getObras();
      } catch (err) {
        console.error("No se pudieron cargar las obras:", err);
        if (activo) setError(true);
      } finally {
        if (activo) setCargando(false);
      }
    };

    cargarObras();
    return () => { activo = false; };
    // El hook actual crea getObras en cada render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const obra = obras.find((item) => item.slug === slug);
  const idioma = i18n.resolvedLanguage?.split("-")[0] || "es";
  const instalaciones = obra?.instalacion || [];
  const imagenes = obra?.img || [];

  if (cargando) return <Spinner />;

  if (error) {
    return (
      <main className="obra-detalle__container">
        <p>{t("obras.detalle.error")}</p>
        <Link to="/obras">← {t("obras.detalle.backToProjects")}</Link>
      </main>
    );
  }

  if (!obra) {
    return (
      <main className="obra-detalle__container">
        <h1>{t("obras.detalle.notFound")}</h1>
        <p>{t("obras.detalle.notFoundDescription")}</p>
        <Link to="/obras">← {t("obras.detalle.backToProjects")}</Link>
      </main>
    );
  }

  return (
    <main className="obra-detalle">
      {/* PORTADA */}
      <section className="obra-detalle__hero">
        {imagenes[0] && <img src={imagenes[0]} alt={obra.obra} />}
        <div className="obra-detalle__hero-overlay" />
        <div className="obra-detalle__hero-content">
          <span>{t("obras.detalle.eyebrow")}</span>
          <h1>{obra.obra}</h1>
          <p>{t("obras.detalle.heroDescription")}</p>
        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="obra-detalle__intro">
        <div className="obra-detalle__container">
          <div>
            <span className="obra-detalle__eyebrow">
              {t("obras.detalle.introLabel")}
            </span>
            <h2>{t("obras.detalle.introTitle")}</h2>
          </div>
          <div>
            <p>{t("obras.detalle.introDescription")}</p>
            {obra.fecha && (
              <p><strong>{t("obras.detalle.year")}:</strong> {obra.fecha}</p>
            )}
          </div>
        </div>
      </section>

      {/* EQUIPAMIENTO */}
      <section className="obra-detalle__equipamiento">
        <div className="obra-detalle__container">
          <span className="obra-detalle__eyebrow">
            {t("obras.detalle.equipmentLabel")}
          </span>
          <h2>{t("obras.detalle.equipmentTitle")}</h2>
          <div className="obra-detalle__equipment-grid">
            {instalaciones.map((item, index) => (
              <article key={index} className="obra-detalle__equipment-item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item[idioma] || item.es || ""}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="obra-detalle__galeria">
        <div className="obra-detalle__container">
          <span className="obra-detalle__eyebrow">
            {t("obras.detalle.galleryLabel")}
          </span>
          <h2>{t("obras.detalle.galleryTitle")}</h2>
          <div className="obra-detalle__gallery-grid">
            {imagenes.map((imagen, index) => (
              <div className="obra-detalle__gallery-image" key={`${imagen}-${index}`}>
                <img src={imagen} alt={`${obra.obra} - ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="obra-detalle__back-container">
            <Link to="/obras" className="obra-detalle__back">
              <span className="obra-detalle__back-arrow" aria-hidden="true">
                ←
              </span>
              {t("obras.detalle.backToProjects")}
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="obra-detalle__cta">
        <div className="obra-detalle__container">
          <h2>{t("obras.detalle.ctaTitle")}</h2>
          <p>{t("obras.detalle.ctaDescription")}</p>
          <Link to="/contacto">{t("obras.detalle.ctaButton")} →</Link>
        </div>
      </section>
    </main>
  );
};

export default ObraDetalle;
