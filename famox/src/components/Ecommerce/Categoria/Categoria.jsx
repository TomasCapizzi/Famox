
import Item from "../Item/Item";

function Categoria({ items = [], tipo }) {
  const ordenados = [...items].sort(
    (a, b) => (a.orden || 0) - (b.orden || 0)
  );

  return (
    <div className="categoria">
      {ordenados.map((item) => (
        <Item
          key={item._id}
          item={item}
          tipo={tipo}
        />
      ))}
    </div>
  );
}

export default Categoria;
