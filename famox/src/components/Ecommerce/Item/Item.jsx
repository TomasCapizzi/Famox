
import EleccionesContainer from "./Eleccion/EleccionesContainer";
import Descripcion from "./Eleccion/Descripcion";

function Item({ item, tipo }) {
  return (
    <article className="item-ecom tienda-producto">
      <Descripcion item={item} />

      <EleccionesContainer
        item={item}
        tipo={tipo}
      />
    </article>
  );
}

export default Item;

