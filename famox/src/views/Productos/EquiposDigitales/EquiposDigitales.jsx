
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Item from "components/ListaProductos/Accesorios/Item";
import Spinner from "components/Spinner/Spinner";
import useListaProductos from "hooks/productos/useListaProductos";

function EquiposDigitales() {
  const api =
    "https://famox-api.vercel.app/api/products/equipos-digitales";

  const { t } = useTranslation();
  const {
    getProducts,
    products,
    loading,
    error
  } = useListaProductos();

  useEffect(() => {
    getProducts(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="accesorios">
      <Helmet>
        <title>{t("home.categorias.d")} | Famox</title>
        <meta
          name="description"
          content={t("categorias.digitales.description")}
        />
      </Helmet>

      <div className="accesorios__container">
        <header className="accesorios__header">
          <span className="accesorios__eyebrow">
            {t("categorias.digitales.eyebrow")}
          </span>

          <h1>{t("home.categorias.d")}</h1>

          <p>{t("categorias.digitales.description")}</p>
        </header>


        <div className="accesorios__list">
          {loading ? (
            <Spinner />
          ) : error ? (
            <p role="alert">{t("productos.estados.error")}</p>
          ) : products.length === 0 ? (
            <p>{t("productos.estados.vacio")}</p>
          ) : (
            products.map((product) => (
              <Item
                key={product._id}
                product={product}
              />
            ))
          )}
        </div>

      </div>
    </main>
  );
}

export default EquiposDigitales;
