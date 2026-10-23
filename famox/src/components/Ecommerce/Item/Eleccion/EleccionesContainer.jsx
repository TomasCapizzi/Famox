
import EleccionAccesorio from "./EleccionProducto/Accesorios/EleccionAccesorio";
import EleccionGasoterapia from "./EleccionProducto/Gasoterapia/EleccionGasoterapia";
import EleccionUnidSum from "./EleccionProducto/UnidSum/EleccionUnidSum";
import EleccionEquipoDigital from "./EleccionProducto/EquiposDigitales/EleccionEquipoDigital";

function EleccionesContainer({ item, tipo }) {
  function mostrarEleccion() {
    switch (tipo) {
      case "gasoterapia":
        return <EleccionGasoterapia item={item} />;

      case "accesorios":
        return <EleccionAccesorio item={item} />;

      case "digitales":
        return <EleccionEquipoDigital item={item} />;

      case "unidades":
        return <EleccionUnidSum item={item} />;

      default:
        return null;
    }
  }

  return (
    <section className="elecciones-container">
      <article className="elecciones">
        {mostrarEleccion()}
      </article>
    </section>
  );
}

export default EleccionesContainer;
