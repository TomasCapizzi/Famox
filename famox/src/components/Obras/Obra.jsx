
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Obra({ obra }) {
  const { t } = useTranslation();

  const imagenPrincipal = obra.img?.[0];

  return (
    <article className="obras-page__card">
      <Link
        to={`/obras/${obra.slug}`}
        className="obras-page__card-link"
      >
        <div className="obras-page__card-image">
          <img
            src={imagenPrincipal}
            alt={obra.obra}
            loading="lazy"
          />

          <span
            className="obras-page__card-arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        <div className="obras-page__card-info">
          <div>
            <span className="obras-page__location">
              {obra.fecha}
            </span>

            <h2>{obra.obra}</h2>
          </div>

          <span className="obras-page__view">
            {t("obras.listado.viewProject")} →
          </span>
        </div>
      </Link>
    </article>
  );
}

export default Obra;
