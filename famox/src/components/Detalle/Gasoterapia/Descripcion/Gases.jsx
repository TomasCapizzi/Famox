
import GASES from "data/gases";
import { useTranslation } from "react-i18next";

function Gases({ product }) {
  const { t } = useTranslation();

  return (
    <section className="gases">
      <h2>{t("productos.detalle.op2")}</h2>

      <div className="gases__list">
        {product.map((nombre, index) => {
          const gas = GASES.find(
            (item) => item.nombre === nombre
          );

          return (
            <div
              className="gases__item"
              key={`${nombre}-${index}`}
            >
              {gas?.img ? (
                <img
                  src={`/${gas.img.replace(/^\/+/, "")}`}
                  alt={nombre}
                  title={nombre}
                  loading="lazy"
                />
              ) : (
                <span>{nombre}</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gases;
