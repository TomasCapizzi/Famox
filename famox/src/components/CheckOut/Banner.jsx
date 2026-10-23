
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  return (
    <div className="checkout__banner">
      <img
        src="/img/Banners/Checkout.webp"
        alt={t("checkout.page.imageAlt")}
      />

      <div className="checkout__banner-content">
        <p>{t("checkout.page.thankYou")}</p>
      </div>
    </div>
  );
}

export default Banner;
