
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function RedesSociales() {
  const { t } = useTranslation();

  return (
    <div className="footer-rrss">
      <a
        href="https://api.whatsapp.com/send?phone=5491134276306&text=Hola%20Famox!%20Estoy%20interesado%20en%20consultar%20sobre..."
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("footer.social.whatsapp")}
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://www.instagram.com/famox_sa/?hl=es-la"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("footer.social.instagram")}
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/company/famoxsa/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("footer.social.linkedin")}
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default RedesSociales;
