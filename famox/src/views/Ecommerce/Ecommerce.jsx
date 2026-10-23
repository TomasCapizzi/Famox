
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Categoria from "components/Ecommerce/Categoria/Categoria";
import Filtro from "components/Ecommerce/Filtro/Filtro";
import Spinner from "components/Spinner/Spinner";

const categoriasIniciales = {
  gasoterapia: true,
  unidades: true,
  accesorios: true,
  digitales: true
};

function Ecommerce() {
  const { t } = useTranslation();

  const [listadoProductos, setListadoProductos] = useState({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  const [seleccionadas, setSeleccionadas] =
    useState(categoriasIniciales);

  useEffect(() => {
    const controller = new AbortController();

    async function cargarProductos() {
      setCargando(true);
      setError(false);

      try {
        const response = await fetch(
          "https://famox-api.vercel.app/api/products/listado",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Error al cargar productos");
        }

        const data = await response.json();

        if (!controller.signal.aborted) {
          setListadoProductos(data.products || {});
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          console.error(err);
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarProductos();

    return () => controller.abort();
  }, []);

  function cambiarCategoria(id, checked) {
    setSeleccionadas((anterior) => ({
      ...anterior,
      [id]: checked
    }));
  }

  function restablecerFiltros() {
    setSeleccionadas({ ...categoriasIniciales });
  }

  const grupos = [
    {
      id: "gasoterapia",
      nombre: t("home.categorias.b"),
      campo: "gasoterapia"
    },
    {
      id: "unidades",
      nombre: t("home.categorias.a"),
      campo: "unidadesSuministro"
    },
    {
      id: "accesorios",
      nombre: t("home.categorias.c"),
      campo: "accesorios"
    },
    {
      id: "digitales",
      nombre: t("home.categorias.d"),
      campo: "equiposDigitales"
    }
  ];

  const algunaSeleccionada =
    Object.values(seleccionadas).some(Boolean);

  return (
    <main className="container-ecommerce tienda">
      <Helmet>
        <title>{t("tienda.title")} | Famox</title>
        <meta
          name="description"
          content={t("tienda.description")}
        />
      </Helmet>

      <div className="tienda__container">
        <header className="tienda__header">
          <span className="tienda__eyebrow">
            {t("tienda.eyebrow")}
          </span>

          <h1>{t("tienda.title")}</h1>

          <p>{t("tienda.description")}</p>
        </header>

        <div className="tienda__layout">
          <Filtro
            grupos={grupos}
            seleccionadas={seleccionadas}
            onToggle={cambiarCategoria}
            onReset={restablecerFiltros}
          />

          <div className="tienda__resultados">
            {cargando ? (
              <div className="tienda__estado">
                <Spinner />
              </div>
            ) : error ? (
              <p className="tienda__estado" role="alert">
                {t("tienda.error")}
              </p>
            ) : !algunaSeleccionada ? (
              <p className="tienda__estado">
                {t("tienda.sinFiltros")}
              </p>
            ) : (
              grupos.map((grupo) => {
                const productos =
                  listadoProductos[grupo.campo] || [];

                return (
                  <section
                    className="tienda__grupo"
                    key={grupo.id}
                    style={{
                      display: seleccionadas[grupo.id]
                        ? undefined
                        : "none"
                    }}
                  >
                    <div className="tienda__grupo-header">
                      <h2>{grupo.nombre}</h2>

                      <span>
                        {productos.length}{" "}
                        {t("tienda.productos")}
                      </span>
                    </div>

                    <Categoria items={productos} tipo={grupo.id} />
                  </section>
                );
              })
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Ecommerce;
