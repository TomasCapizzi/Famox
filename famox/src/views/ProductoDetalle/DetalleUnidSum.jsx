
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FichaProducto from "components/Detalle/FichaProducto";
import Descripcion from "components/Detalle/UnidSum/Descripcion";
import Spinner from "components/Spinner/Spinner";
import useDetalle from "hooks/productos/useDetalle";

function DetalleUnidSum() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();

  const lang = i18n.resolvedLanguage?.split("-")[0] || "es";

  const { getItem, product, handler } = useDetalle();

  const api =
    "https://famox-api.vercel.app/api/products/unidades-suministro/";

  useEffect(() => {
    getItem(api, id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const nombre =
    product?.nombre?.[lang] ||
    product?.nombre?.es ||
    t("home.categorias.a");

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
          categoria="home.categorias.a"
          volverA="/unidades-de-suministro"
          descripcion={
            <Descripcion product={product} lang={lang} />
          }
        />
      ) : (
        <div className="detalle-producto__loading">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default DetalleUnidSum;
