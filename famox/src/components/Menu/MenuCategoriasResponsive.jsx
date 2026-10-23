
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiChevronDown } from "react-icons/fi";

function MenuCategoriasResponsive({ useMenuHamb }) {
  const { t } = useTranslation();
  const [abierto, setAbierto] = useState(false);

  const categorias = [
    {
      ruta: "/unidades-de-suministro",
      nombre: t("home.categorias.a")
    },
    {
      ruta: "/gasoterapia",
      nombre: t("home.categorias.b")
    },
    {
      ruta: "/accesorios",
      nombre: t("home.categorias.c")
    },
    {
      ruta: "/equipos-digitales",
      nombre: t("home.categorias.d")
    }
  ];

  const cerrar = () => {
    setAbierto(false);
    useMenuHamb();
  };

  return (
    <div className="categorias-handler categorias-handler--mobile">
      <div className="categorias-handler__row">
        <Link to="/productos" onClick={cerrar}>
          {t("menu.link5")}
        </Link>

        <button
          type="button"
          onClick={() => setAbierto(!abierto)}
          aria-expanded={abierto}
          aria-controls="categorias-mobile"
          aria-label={
            abierto
              ? t("menu.hideCategories")
              : t("menu.showCategories")
          }
          className={abierto ? "is-open" : ""}
        >
          <FiChevronDown />
        </button>
      </div>

      {abierto && (
        <ul className="categorias" id="categorias-mobile">
          {categorias.map((categoria) => (
            <li key={categoria.ruta}>
              <Link to={categoria.ruta} onClick={cerrar}>
                {categoria.nombre}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuCategoriasResponsive;
