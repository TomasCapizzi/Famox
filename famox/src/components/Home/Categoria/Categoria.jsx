
import { Link } from "react-router-dom";

function Categoria({ titulo, img, link }) {
  return (
    <Link to={link} className="productos__categoria">
      <img src={img} alt={titulo} loading="lazy" />

      <div
        className="productos__categoria-overlay"
        aria-hidden="true"
      />

      <div className="productos__categoria-content">
        <h3>{titulo}</h3>

        <span
          className="productos__categoria-arrow"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </Link>
  );
}

export default Categoria;

