
import { useTranslation } from "react-i18next";

function Descripcion({ product, lang }) {
  const { t } = useTranslation();

  const uso = product.uso?.[lang] || product.uso?.es;

  return (
    <div className="uso">
      {uso && (
        <div className="descripcion">
          <h2>{t("productos.detalle.op3")}</h2>
          <p>{uso}</p>
        </div>
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
