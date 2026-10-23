
import { useContext, useState } from "react";
import { CarritoContext } from "store/carritoContext";

const useAgregarEquipoDig = ({ item }) => {
  const { agregarEquipoDigital } = useContext(CarritoContext);
  const [modelo, setModelo] = useState();

  function agregarAlCarrito(cantidadSeleccionada) {
    const cantidad = Number(cantidadSeleccionada);

    if (
      !modelo ||
      !Number.isInteger(cantidad) ||
      cantidad <= 0
    ) {
      return;
    }

    const producto = {
      nombre: item.nombre,
      fecha: new Date().toISOString(),
      codigo: modelo.codigo,
      img: item.img,
      equipoDigital: true,
      cantidad,
      modelo,
      _id: Math.random().toString(36).slice(2)
    };

    agregarEquipoDigital({ producto });
  }

  return {
    agregarAlCarrito,
    setModelo,
    modelo
  };
};

export default useAgregarEquipoDig;
