
import { useTranslation } from "react-i18next";
import ManualBtn from "components/Detalle/ManualBtn";

function Item({ product }) {
  const { i18n } = useTranslation();

  const idioma =
    i18n.resolvedLanguage?.split("-")[0] || "es";

  const nombre =
    product.nombre?.[idioma] ||
    product.nombre?.es ||
    "";

  const descripcion =
    product.descripcion?.[idioma] ||
    product.descripcion?.es ||
    "";

  return (
    <article className="accesorio">
      <div className="acc-img">
        <img
          src={product.img}
          alt={nombre}
          loading="lazy"
        />
      </div>

      <div className="acc-descrip">
        <h2>{nombre}</h2>

        {descripcion && <p>{descripcion}</p>}

        {product.manual && (
          <div className="acc-manual">
            <ManualBtn product={product} />
          </div>
        )}
      </div>
    </article>
  );
}

export default Item;
