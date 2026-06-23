import { useTranslation } from 'react-i18next';

function Telefono() {

  const {t} = useTranslation()
  return (
    <div>
        <h3>{t("contacto.info.t1.title")}</h3>
        <p>{t("contacto.info.t1.sub1")}</p>
        <p>{t("contacto.info.t1.sub2")}</p>
    </div>
  )
}

export default Telefono