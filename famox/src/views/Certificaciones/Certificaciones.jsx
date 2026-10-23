
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import ANMAT from "components/Certificaciones/ANMAT";
import ISO13485 from "components/Certificaciones/ISO13485";
import ISO9001 from "components/Certificaciones/ISO9001";

function Certificaciones() {
  const { t } = useTranslation();

  return (
    <main className="certificaciones">
      <Helmet>
        <title>
          {t("certif.page.title")} | Famox
        </title>

        <meta
          name="description"
          content={t("certif.page.description")}
        />
      </Helmet>

      <div className="certificaciones__container">
        <header className="certificaciones__header">
          <span className="certificaciones__eyebrow">
            {t("certif.page.eyebrow")}
          </span>

          <h1>{t("certif.page.title")}</h1>

          <p>{t("certif.page.description")}</p>
        </header>

        <div className="seccion1">
          <img
            src="/img/certif.webp"
            alt={t("certif.page.imageAlt")}
            loading="lazy"
          />
        </div>

        <div className="certificaciones__sections">
          <ISO9001 />
          <ISO13485 />
          <ANMAT />
        </div>
      </div>
    </main>
  );
}

export default Certificaciones;
