
import Tabla from "./Tabla";

function CarritoLleno({ carro }) {
  return (
    <article className="carro-lleno">
      <div
        className="carrito__tabla-scroll"
        role="region"
        aria-label="Productos seleccionados"
        tabIndex={0}
      >
        <Tabla carro={carro} />
      </div>
    </article>
  );
}

export default CarritoLleno;
