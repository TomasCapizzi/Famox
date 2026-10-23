
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";

import { CarritoContext } from "store/carritoContext";
import Links from "./Links";
import LinksResponsive from "./LinksResponsive";
import { useTranslation } from "react-i18next";

function Menu() {
  const { carro, obtenerDataLocalStorage } =
    useContext(CarritoContext);

  const { pathname } = useLocation();

  const { t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const esHome = pathname === "/";

  useEffect(() => {
    obtenerDataLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const comprobarScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    comprobarScroll();

    window.addEventListener("scroll", comprobarScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", comprobarScroll);
    };
  }, []);

  useEffect(() => {
    setMenuAbierto(false);
  }, [pathname]);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav
      className={[
        "menu",
        esHome ? "menu--home" : "menu--inner",
        scrolled ? "menu--scrolled" : "",
        menuAbierto ? "menu--open" : ""
      ].filter(Boolean).join(" ")}
      aria-label="Navegación principal"
    >
      <Link to="/" className="menu__logo">
        <img src="/img/Logo.png" alt="Famox" />
      </Link>

      <div className="responsive-menu">
        <Link
          to="/carrito"
          className="carrito-responsive"
          aria-label="Carro de compras"
        >
          <span className="carrito">
            {carro.length > 0
              ? <RiShoppingCartFill />
              : <RiShoppingCart2Line />}

            {carro.length > 0 && (
              <span className="carrito__cantidad">
                {carro.length}
              </span>
            )}
          </span>
        </Link>
        <button
            className="menu-hamb"
            type="button"
            aria-label={
              menuAbierto
                ? t("menu.mobileClose")
                : t("menu.mobileOpen")
            }
            aria-expanded={menuAbierto}
            aria-controls="menu-mobile"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? <FiX /> : <FiMenu />}
          </button>
      </div>

      <LinksResponsive
        menuAbierto={menuAbierto}
        useMenuHamb={cerrarMenu}
      />

      <Links carro={carro} />
    </nav>
  );
}

export default Menu;
