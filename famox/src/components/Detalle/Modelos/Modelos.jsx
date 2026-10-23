
import ModeloItem from "./ModeloItem";
import { useTranslation } from "react-i18next";

function Modelos({ modelos, lang }) {
  const { t } = useTranslation();

  if (!Array.isArray(modelos) || modelos.length === 0) {
    return null;
  }

  return (
    <section className="modelos">
      <h4>{t("ecomm.categorias.b")}</h4>

      <div className="modelo-info">
        {modelos.map((item, index) => (
          <ModeloItem
            item={item}
            key={
              item._id ||
              `${item.nombre?.es || "modelo"}-${index}`
            }
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
}

export default Modelos;

