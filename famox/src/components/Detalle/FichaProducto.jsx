
import { useTranslation } from "react-i18next";
import ManualBtn from "components/Detalle/ManualBtn";
import { Link } from "react-router-dom";

function FichaProducto({
  product,
  categoria,
  volverA,
  children,
  descripcion
}) {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage?.split("-")[0] || "es";

  const nombre =
    product.nombre?.[lang] ||
    product.nombre?.es ||
    "";

  return (
    <main className="detalle-producto">
      <div className="detalle-producto__container">

        <header className="detalle-producto__header">
          <span className="detalle-producto__eyebrow">
            {t(categoria)}
          </span>

          <h1>{nombre}</h1>
        </header>

        <div className="detalle-producto__actions">
            <Link
            to={volverA}
            className="detalle-producto__back"
            >
            <span aria-hidden="true">←</span>
            {t("productos.detalle.volverA")} {t(categoria)}
            </Link>

          {product.manual && (
            <div className="detalle-producto__manual">
              <ManualBtn product={product} />
            </div>
          )}
        </div>

        <section className="detalle-producto__principal">
          <div className="detalle-producto__image">
            <img
              src={product.img}
              alt={nombre}
            />
          </div>

          <div className="detalle-producto__content">
            {descripcion}
          </div>
        </section>

        {children && (
          <div className="detalle-producto__extra">
            {children}
          </div>
        )}
      </div>
    </main>
  );
}

export default FichaProducto;
