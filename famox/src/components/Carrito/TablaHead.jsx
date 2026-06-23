import { useTranslation } from "react-i18next"

function TablaHead() {

  const {t} = useTranslation();

  return (
    <thead>
        <tr>
            <th>{t("cart.tabla.t1")}</th>
            <th>{t("cart.tabla.t2")}</th>
            <th>{t("cart.tabla.t3")}</th>
            <th>{t("cart.tabla.t4")}</th>
            <th>{t("cart.tabla.t5")}</th>
        </tr>
    </thead>
  )
}

export default TablaHead