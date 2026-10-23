
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Item({ product }) {
  const { t, i18n } = useTranslation();

  const idioma =
    i18n.resolvedLanguage?.split("-")[0] || "es";

  const nombre =
    product.nombre?.[idioma] ||
    product.nombre?.es ||
    "";

  return (
    <article className="item">
      <Link
        to={`/gasoterapia/${product.slug || product._id}`}
        className="item-container"
      >
        <div className="item__image">
          <img
            src={product.img}
            alt={nombre}
            loading="lazy"
          />
        </div>

        <div className="item__body">
          <h3>{nombre}</h3>

          <span className="item__view">
            {t("categorias.verProducto")}
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export default Item;
