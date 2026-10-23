
import { useContext } from "react";
import { CarritoContext } from "store/carritoContext";

const useAgregarAccesorio = () => {
  const { agregarAccesorio } = useContext(CarritoContext);

  // Accesorios con selección de gas y cantidad propia
  function agregarAlCarrito(acc) {
    const cantidad = Number(acc.cantidad);

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      return;
    }

    const producto = {
      nombre: acc.nombre,
      fecha: new Date().toISOString(),
      codigo: acc.codigo,
      accesorio: true,
      gas: acc.gas ? acc.gas.toUpperCase() : null,
      img: acc.img,
      cantidad,
      _id: Math.random().toString(36).slice(2)
    };

    agregarAccesorio({ producto });
  }

  // Accesorios de Unidades de Suministro
  function agregarAlCarritoUS(acc, cantidadSeleccionada) {
    const cantidad = Number(cantidadSeleccionada);

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      return;
    }

    const producto = {
      nombre: acc.nombre,
      fecha: new Date().toISOString(),
      codigo: acc.codigo,
      accesorio: true,
      img: acc.img,
      cantidad,
      _id: Math.random().toString(36).slice(2)
    };

    agregarAccesorio({ producto });
  }

  return {
    agregarAlCarrito,
    agregarAlCarritoUS
  };
};

export default useAgregarAccesorio;
