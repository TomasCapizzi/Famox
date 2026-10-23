
import CONECTORES from "data/conectores";
import { useTranslation } from "react-i18next";

function Conectores({ product }) {
  const { t } = useTranslation();

  return (
    <section className="conectores">
      <h2>{t("productos.detalle.op1")}</h2>

      <div className="conec-info">
        {product.map((nombre, index) => {
          const conector = CONECTORES.find(
            (item) => item.nombre === nombre
          );

          return (
            <article
              className="conector"
              key={`${nombre}-${index}`}
            >
              {conector?.img && (
                <img
                  src={`/${conector.img.replace(/^\/+/, "")}`}
                  alt={nombre}
                  loading="lazy"
                />
              )}

              <h3>{nombre}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Conectores;
