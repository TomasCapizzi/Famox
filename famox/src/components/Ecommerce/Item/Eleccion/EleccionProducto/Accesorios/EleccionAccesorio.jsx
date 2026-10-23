
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import BotonComprar from "./BotomComprar";
import Modelo from "./Modelo";
import ModeloUnidSum from "./ModeloUnidSum";
import Botonera from "./Botonera";
import Selecciones from "./Selecciones/Selecciones";

import NotificacionAgregado from "../NotificacionAgregado";

import useAgregarAccesorio from "hooks/ecommerce/accesorio/useAgregarAccesorio";
import useBorrarSeleccion from "hooks/ecommerce/accesorio/useBorrarSeleccion";
import useSeleccionarAccesorio from "hooks/ecommerce/accesorio/useSeleccionarAccesorio";
import useNotificacion from "hooks/ecommerce/useNotificacion";

function EleccionAccesorio({ item }) {
  const [accesorios, setAccesorios] = useState([]);
  const [cantidadSimple, setCantidadSimple] = useState(1);

  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  const {
    agregarAlCarrito,
    agregarAlCarritoUS
  } = useAgregarAccesorio({ item });

  const {
    seleccionAccesorio,
    seleccionAccesorioUS
  } = useSeleccionarAccesorio(
    setAccesorios,
    accesorios
  );

  const { eliminarSeleccion } = useBorrarSeleccion(
    setAccesorios,
    accesorios
  );

  const refNoti = useRef();
  const { activarNoti } = useNotificacion();

  const modelos = Array.isArray(item.modelos)
    ? item.modelos
    : [];

  // Sin modelos: selección directa por cantidad.
  const tieneModelos =
    Array.isArray(item.modelos) &&
    item.modelos.length > 0;

  const esAccesorioSimple =
    !tieneModelos ||
    (!item.gases && !item.accesorioUS);

  function agregarSimple() {
    const cantidad = Number(cantidadSimple);

    if (!Number.isInteger(cantidad) || cantidad < 1) {
      return;
    }

    agregarAlCarrito({
      nombre: item.nombre,
      img: item.img,
      codigo: item.codigo,
      cantidad
    });

    activarNoti(refNoti);
  }

  return (
    <article className="eleccion-accesorio">
      {esAccesorioSimple ? (
        <div className="accesorio-simple">
          <label htmlFor={`cantidad-${item._id}`}>
            {t("ecomm.steps.a")}
          </label>

          <div className="accesorio-simple__acciones">
            <input
              id={`cantidad-${item._id}`}
              type="number"
              min="1"
              step="1"
              value={cantidadSimple}
              onChange={(e) =>
                setCantidadSimple(e.target.value)
              }
            />

            <button
              type="button"
              className="acc-btn-comprar"
              onClick={agregarSimple}
              disabled={
                !Number.isInteger(Number(cantidadSimple)) ||
                Number(cantidadSimple) < 1
              }
            >
              {t("ecomm.steps.c")}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="acc-container">
            {item.gases &&
              modelos.map((acc) => (
                <Modelo
                  key={acc._id || acc.nombre?.es}
                  accesorio={acc}
                  seleccionAccesorio={seleccionAccesorio}
                  activarNoti={activarNoti}
                  gasesHandler={item.gases}
                  refNoti={refNoti}
                />
              ))}

            {item.accesorioUS &&
              modelos.map((acc) => (
                <ModeloUnidSum
                  key={acc._id || acc.nombre?.es}
                  accesorio={acc}
                  seleccionAccesorioUS={seleccionAccesorioUS}
                  accesoriosUSHandler={item.accesorioUS}
                  activarNoti={activarNoti}
                  refNoti={refNoti}
                />
              ))}
          </div>

          <div className="acc-selecc-container">
            <Selecciones
              accesorios={accesorios}
              eliminarSeleccion={eliminarSeleccion}
            />

            {item.gases ? (
              <BotonComprar
                accesorios={accesorios}
                setAccesorios={setAccesorios}
                agregarAlCarrito={agregarAlCarrito}
              />
            ) : (
              <Botonera
                accesorios={accesorios}
                setAccesorios={setAccesorios}
                agregarAlCarrito={agregarAlCarritoUS}
              />
            )}
          </div>
        </>
      )}

      <NotificacionAgregado refNoti={refNoti} />
    </article>
  );
}

export default EleccionAccesorio;
