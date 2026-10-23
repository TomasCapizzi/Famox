
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Item from "components/ListaProductos/Gasoterapia/Item";
import Spinner from "components/Spinner/Spinner";
import useListaProductos from "hooks/productos/useListaProductos";

function Gasoterapia() {
  const api =
    "https://famox-api.vercel.app/api/products/gasoterapia";

  const {
    getProducts,
    products,
    loading,
    error
  } = useListaProductos();
  const { t } = useTranslation();

  useEffect(() => {
    getProducts(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="categoria categoria--listado">
      <Helmet>
        <title>{t("home.categorias.b")} | Famox</title>
        <meta
          name="description"
          content={t("categorias.gasoterapia.description")}
        />
      </Helmet>

      <div className="categoria__container">
        <header className="categoria__header">
          <span className="categoria__eyebrow">
            {t("categorias.gasoterapia.eyebrow")}
          </span>

          <h1>{t("home.categorias.b")}</h1>

          <p>
            {t("categorias.gasoterapia.description")}
          </p>
        </header>

        <div className="items-container">
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

export default Gasoterapia;
