
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FichaProducto from "components/Detalle/FichaProducto";
import Descripcion from "components/Detalle/Gasoterapia/Descripcion/Descripcion";
import Conectores from "components/Detalle/Gasoterapia/Descripcion/Conectores";
import Modelos from "components/Detalle/Modelos/Modelos";
import Spinner from "components/Spinner/Spinner";
import useDetalle from "hooks/productos/useDetalle";

function DetalleGasoterapia() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();

  const lang = i18n.resolvedLanguage?.split("-")[0] || "es";

  const { getItem, product, handler } = useDetalle();

  const api =
    "https://famox-api.vercel.app/api/products/gasoterapia/";

  useEffect(() => {
    getItem(api, id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const nombre =
    product?.nombre?.[lang] ||
    product?.nombre?.es ||
    t("home.categorias.b");

  const descripcionSEO =
    product?.uso?.[lang] ||
    product?.uso?.es ||
    "";

  return (
    <>
      <Helmet>
        <title>{nombre} | Famox</title>
        <meta
          name="description"
          content={descripcionSEO}
        />
      </Helmet>

      {handler && product ? (
        <FichaProducto
          product={product}
          categoria="home.categorias.b"
          volverA="/gasoterapia"
          descripcion={
            <Descripcion product={product} lang={lang} />
          }
        >
          {Array.isArray(product.conectores) &&
            product.conectores.length > 0 && (
              <Conectores product={product.conectores} />
            )}

          {Array.isArray(product.modelos_) &&
            product.modelos_.length > 0 && (
              <Modelos
                modelos={product.modelos_}
                lang={lang}
              />
            )}
        </FichaProducto>
      ) : (
        <div className="detalle-producto__loading">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default DetalleGasoterapia;
