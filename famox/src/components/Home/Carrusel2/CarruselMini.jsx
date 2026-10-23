
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

  const imagenes = Array.from(
    { length: 12 },
    (_, index) => `/img/CarruselMini/foto${index + 1}.webp`
  );

function CarruselMini() {
  const { t } = useTranslation();
  const carruselRef = useRef(null);

  const mover = (direccion) => {
    const contenedor = carruselRef.current;
    if (!contenedor) return;

    const primeraImagen = contenedor.querySelector(
      ".home-conocenos__image"
    );

    if (!primeraImagen) return;

    const gap = parseFloat(
      getComputedStyle(contenedor).columnGap
    ) || 0;

    const desplazamiento =
      primeraImagen.getBoundingClientRect().width + gap;

    contenedor.scrollBy({
      left: direccion * desplazamiento,
      behavior: "smooth",
    });
  };

  return (
    <section className="home-conocenos">
      <div className="home-conocenos__container">
        <div className="home-conocenos__header">
          <div className="home-conocenos__intro">
            <span className="home-conocenos__eyebrow">
              {t("home.conocenos.eyebrow")}
            </span>

            <h2>{t("home.conocenos.title")}</h2>

            <p>{t("home.conocenos.description")}</p>
          </div>

          <div className="home-conocenos__controls">
            <button
              type="button"
              onClick={() => mover(-1)}
              aria-label={t("home.conocenos.previous")}
            >
              <MdOutlineArrowBackIosNew />
            </button>

            <button
              type="button"
              onClick={() => mover(1)}
              aria-label={t("home.conocenos.next")}
            >
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>

        <div
          className="home-conocenos__track"
          ref={carruselRef}
          aria-label={t("home.conocenos.galleryLabel")}
        >
          {imagenes.map((ruta, index) => (
            <div
              className="home-conocenos__image"
              key={ruta}
            >
              <img
                src={ruta}
                alt={`${t("home.conocenos.imageAlt")} ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="home-conocenos__footer">
          <Link to="/nosotros">
            {t("home.conocenos.button")} ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CarruselMini;
