
import { useTranslation } from "react-i18next";

function Mision() {
  const { t } = useTranslation();

  return (
    <section className="seccion3">
      <img
        src="/img/Nosotros/nos2.jpg"
        alt="Proceso de producción en Famox"
        loading="lazy"
      />

      <div>
        <h2>{t("nosotros.title3")}</h2>
        <p>{t("nosotros.txt3")}</p>
      </div>
    </section>
  );
}

export default Mision;
