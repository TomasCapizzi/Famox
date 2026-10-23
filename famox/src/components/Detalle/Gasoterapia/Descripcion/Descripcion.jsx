
import Gases from "./Gases";
import { useTranslation } from "react-i18next";

function Descripcion({ product, lang }) {
  const { t } = useTranslation();

  const uso = product.uso?.[lang] || product.uso?.es;
  const rango = product.rango?.[lang] || product.rango?.es;

  const mostrarGases =
    product.gas &&
    Array.isArray(product.gases_) &&
    product.gases_.length > 0;

  return (
    <div className="uso">
      {uso && (
        <div className="descripcion">
          <h2>{t("productos.detalle.op3")}</h2>
          <p>{uso}</p>
        </div>
      )}

      {rango && (
        <div className="rango">
          <h2>{t("productos.detalle.op4")}</h2>
          <p>{rango}</p>
        </div>
      )}

      {mostrarGases && (
        <Gases product={product.gases_} />
      )}

      {product.anmat && (
        <div className="anmat">
          <p>{t("productos.detalle.op5")}</p>
        </div>
      )}
    </div>
  );
}

export default Descripcion;
