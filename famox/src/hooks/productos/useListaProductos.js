
import { useState } from "react";

const useListaProductos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getProducts(api) {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data.products)) {
        throw new Error("Formato de productos inválido");
      }

      const ordenados = [...data.products].sort(
        (a, b) => (a.orden ?? 0) - (b.orden ?? 0)
      );

      setProducts(ordenados);
    } catch (err) {
      console.error("Error al cargar productos:", err);
      setProducts([]);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    getProducts,
    products,
    loading,
    error
  };
};

export default useListaProductos;
