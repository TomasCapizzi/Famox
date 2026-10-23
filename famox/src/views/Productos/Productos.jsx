
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Categorias from "components/Home/Categorias";

function Productos() {
  const { t } = useTranslation();

  return (
    <main className="productos">
      <Helmet>
        <title>{t("productos.title")} | Famox</title>
        <meta
          name="description"
          content={t("productos.detalle.description")}
        />
      </Helmet>

      <div className="productos__container">
        <header className="productos__header">
          <span className="productos__eyebrow">
            {t("productos.detalle.eyebrow")}
          </span>

          <h1>{t("productos.detalle.heading")}</h1>

          <p>{t("productos.detalle.description")}</p>
        </header>

        <Categorias />
      </div>
    </main>
  );
}

export default Productos;
