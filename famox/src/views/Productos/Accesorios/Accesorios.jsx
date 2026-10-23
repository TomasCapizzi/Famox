
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Item from "components/ListaProductos/Accesorios/Item";
import Spinner from "components/Spinner/Spinner";
import useListaAccesorios from "hooks/productos/useListaAccesorios";

function Accesorios() {
  const api =
    "https://famox-api.vercel.app/api/products/accesorios";

  const { t } = useTranslation();
  const { getAccesorios, accesorios } = useListaAccesorios();

  useEffect(() => {
    getAccesorios(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="accesorios">
      <Helmet>
        <title>{t("home.categorias.c")} | Famox</title>
        <meta
          name="description"
          content={t("categorias.accesorios.description")}
        />
      </Helmet>

      <div className="accesorios__container">
        <header className="accesorios__header">
          <span className="accesorios__eyebrow">
            {t("categorias.accesorios.eyebrow")}
          </span>

          <h1>{t("home.categorias.c")}</h1>

          <p>{t("categorias.accesorios.description")}</p>
        </header>

        <div className="accesorios__list">
          {accesorios.length > 0
            ? accesorios.map((product) => (
                <Item
                  key={product._id}
                  product={product}
                />
              ))
            : <Spinner />}
        </div>
      </div>
    </main>
  );
}

export default Accesorios;
