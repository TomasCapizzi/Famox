
import { useTranslation } from "react-i18next";
import Mails from "./DatosContacto/Mails";
import Telefono from "./DatosContacto/Telefono";

const MAPA_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.922267850593!2d-58.50051841728875!3d-34.66245386936837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabb78736cbf%3A0x13fef67a0b5e4496!2sFamox!5e0!3m2!1ses-419!2sar!4v1644500484441!5m2!1ses-419!2sar";

function Info() {
  const { t } = useTranslation();

  return (
    <aside className="contacto__details">
      <h2>{t("contacto.page.infoTitle")}</h2>

      <div className="contacto__details-content">
        <Telefono />
        <Mails />
      </div>
    </aside>
  );
}

export function MapaContacto() {
  const { t } = useTranslation();

  return (
    <section className="contacto__map">
      <div className="contacto__map-header">
        <span className="contacto__eyebrow">
          {t("contacto.page.locationLabel")}
        </span>

        <h2>{t("contacto.page.locationTitle")}</h2>
      </div>

      <iframe
        src={MAPA_URL}
        title={t("contacto.page.mapTitle")}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}

export default Info;
