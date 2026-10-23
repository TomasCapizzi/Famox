
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

import Banner from "components/CheckOut/Banner";

function CheckOut() {
  const { t } = useTranslation();

  return (
    <main className="checkout">
      <Helmet>
        <title>{t("checkout.page.seoTitle")} | Famox</title>
        <meta
          name="description"
          content={t("checkout.page.description")}
        />
      </Helmet>

      <div className="checkout__container">
        <header className="checkout__header">
          <FiCheckCircle
            className="checkout__icon"
            aria-hidden="true"
          />

          <span className="checkout__eyebrow">
            {t("checkout.page.eyebrow")}
          </span>

          <h1>{t("checkout.page.title")}</h1>

          <p>{t("checkout.page.description")}</p>
        </header>

        <Banner />

        <div className="checkout__actions">
          <Link
            to="/tienda"
            className="checkout__primary"
          >
            {t("checkout.page.backToShop")}
            <FiArrowRight aria-hidden="true" />
          </Link>

          <Link
            to="/"
            className="checkout__secondary"
          >
            {t("checkout.page.backToHome")}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CheckOut;
