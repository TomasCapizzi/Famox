
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Obra from "components/Obras/Obra";
import useListaObras from "hooks/obras/useListaObras";
import Spinner from "components/Spinner/Spinner";

function Obras() {
  const { getObras, obras } = useListaObras();
  const { t } = useTranslation();

  useEffect(() => {
    getObras();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="obras-page">
      <Helmet>
        <title>Obras | Famox</title>
        <meta
          name="description"
          content="Conocé los proyectos hospitalarios en los que participó Famox."
        />
      </Helmet>

      <section className="obras-page__intro">
        <div className="obras-page__container">
          <span className="obras-page__eyebrow">
            {t("obras.listado.eyebrow")}
          </span>

          <h1>{t("obras.listado.title")}</h1>
          <p>{t("obras.listado.description")}</p>
        </div>
      </section>

      <section className="obras-page__projects">
        <div className="obras-page__container">
          {obras.length > 0 ? (
            <div className="obras-page__grid">
              {obras.map((obra) => (
                <Obra key={obra._id} obra={obra} />
              ))}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </section>
    </main>
  );
}

export default Obras;
