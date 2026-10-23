
import { useContext, useState } from "react";

import { CarritoContext } from "store/carritoContext";
import useCodigo from "hooks/codigos/useCodigos";

const useAgregarCarrito = ({ item }) => {
  const {
    agregarItemGasoterapia,
    agregarItemUnidSum
  } = useContext(CarritoContext);

  // GASOTERAPIA
  const [gas, setGas] = useState();
  const [conector, setConector] = useState();
  const [rango, setRango] = useState();
  const [modelo, setModelo] = useState();

  // UNIDADES DE SUMINISTRO
  const [valoresMediaTension, setValoresMediaTension] =
    useState([]);

  const [valoresBajaTension, setValoresBajaTension] =
    useState([]);

  const [valoresIluminacion, setValoresIluminacion] =
    useState([]);

  const [conexiones, setConexiones] = useState([]);
  const [longitudPanel, setLongitudPanel] = useState();

  const { derivarFuncion } = useCodigo(
    item.nombre,
    gas,
    conector,
    rango,
    modelo
  );

  // AGREGAR PRODUCTOS

  function agregarAlCarrito(cantidadSeleccionada) {
    const cantidad = Number(cantidadSeleccionada);

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      return;
    }

    // Gasoterapia, incluyendo productos con modelo
    if (modelo || item.gasoterapia) {
      agregarGasoterapia(cantidad);
    } else {
      // Unidades de Suministro
      agregarUnidadSuministro(cantidad);
    }
  }

  // GASOTERAPIA

  function agregarGasoterapia(cantidad) {
    const { nombre, img } = item;

    const producto = {
      nombre,
      fecha: new Date().toISOString(),
      codigo: derivarFuncion(),
      gas,
      conector,
      rango,
      modelo,
      img,
      cantidad,
      _id: Math.random().toString(36).slice(2)
    };

    agregarItemGasoterapia({ producto });
  }

  // UNIDADES DE SUMINISTRO

  function agregarUnidadSuministro(cantidad) {
    const { nombre, img, longitud } = item;

    const producto = {
      nombre,
      fecha: new Date().toISOString(),
      bajaTension: [...valoresBajaTension],
      mediaTension: [...valoresMediaTension],
      iluminacion: [...valoresIluminacion],
      conexiones: [...conexiones],
      img,
      cantidad,
      _id: Math.random().toString(36).slice(2),

      // La longitud se incluye únicamente
      // en los equipos que la requieren.
      ...(longitud
        ? { longitud: longitudPanel }
        : {})
    };

    agregarItemUnidSum({ producto });
  }

  // ELIMINAR OPCIONES SELECCIONADAS

  function eliminarItem(itemSeleccionado) {
    if (valoresMediaTension.includes(itemSeleccionado)) {
      setValoresMediaTension((actual) =>
        actual.filter((valor) => valor !== itemSeleccionado)
      );

    } else if (
      valoresBajaTension.includes(itemSeleccionado)
    ) {
      setValoresBajaTension((actual) =>
        actual.filter((valor) => valor !== itemSeleccionado)
      );

    } else if (
      valoresIluminacion.includes(itemSeleccionado)
    ) {
      setValoresIluminacion((actual) =>
        actual.filter((valor) => valor !== itemSeleccionado)
      );

    } else if (conexiones.includes(itemSeleccionado)) {
      setConexiones((actual) =>
        actual.filter((valor) => valor !== itemSeleccionado)
      );

    } else if (longitudPanel) {
      setLongitudPanel(undefined);
    }
  }

  return {
    agregarAlCarrito,

    // Gasoterapia
    setConector,
    setGas,
    setModelo,
    setRango,
    modelo,
    conector,
    gas,
    rango,

    // Unidades de Suministro
    valoresMediaTension,
    valoresBajaTension,
    valoresIluminacion,
    conexiones,
    longitudPanel,

    setValoresMediaTension,
    setValoresBajaTension,
    setValoresIluminacion,
    setConexiones,
    setLongitudPanel,

    eliminarItem
  };
};

export default useAgregarCarrito;
