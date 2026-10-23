
import { useState } from "react";

const useDetalle = () => {
  const [product, setProduct] = useState(null);
  const [handler, setHandler] = useState(false);
  const [error, setError] = useState(false);

  async function getItem(api, idOslug) {
    setHandler(false);
    setError(false);
    setProduct(null);

    try {
      let id = idOslug;

      // Las URLs antiguas con ObjectId siguen funcionando
      const esObjectId = /^[0-9a-fA-F]{24}$/.test(idOslug);

      if (!esObjectId) {
        // Buscar el ID que corresponde al slug
        const listadoResponse = await fetch(
          api.replace(/\/$/, "")
        );

        if (!listadoResponse.ok) {
          throw new Error("Error al consultar el listado");
        }

        const listado = await listadoResponse.json();

        const encontrado = listado.products?.find(
          (item) => item.slug === idOslug
        );

        if (!encontrado) {
          throw new Error(`No existe el slug: ${idOslug}`);
        }

        id = encontrado._id;
      }

      // Utilizar el endpoint de detalle existente
      const response = await fetch(
        `${api}${encodeURIComponent(id)}`
      );

      if (!response.ok) {
        throw new Error("Error al consultar el producto");
      }

      const detalle = await response.json();

      setProduct(detalle);
      setHandler(true);
    } catch (err) {
      console.error("No se pudo cargar el producto:", err);
      setError(true);
    }
  }

  return {
    getItem,
    product,
    handler,
    error,
    setHandler,
    setProduct
  };
};

export default useDetalle;
