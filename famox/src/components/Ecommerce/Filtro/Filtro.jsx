
import { useTranslation } from "react-i18next";

function Filtro({
  grupos,
  seleccionadas,
  onToggle,
  onReset
}) {
  const { t } = useTranslation();

  return (
    <aside className="tienda-filtros">
      <div className="tienda-filtros__header">
        <h2>{t("tienda.filtros")}</h2>
        <p>{t("tienda.filtrarPor")}</p>
      </div>

      <div className="tienda-filtros__opciones">
        {grupos.map((grupo) => (
          <label
            className="tienda-filtros__opcion"
            key={grupo.id}
          >
            <input
              type="checkbox"
              checked={seleccionadas[grupo.id]}
              onChange={(e) =>
                onToggle(grupo.id, e.target.checked)
              }
            />

            <span>{grupo.nombre}</span>
          </label>
        ))}
      </div>

      <button
        type="button"
        className="tienda-filtros__reset"
        onClick={onReset}
      >
        {t("tienda.restablecer")}
      </button>
    </aside>
  );
}

export default Filtro;
