import { useTranslation } from 'react-i18next';

function Mails() {

  const {t} = useTranslation();
  return (
    <>
        <div>
            <h3>{t("contacto.info.t2.title")}</h3>
            <p>{t("contacto.info.t2.sub1")}</p>
        </div>
        <div>
            <h3>{t("contacto.info.t3.title")}</h3>
            <p>{t("contacto.info.t3.sub1")}</p>
        </div>
        <div>
            <h3>{t("contacto.info.t4.title")}</h3>
            <p>{t("contacto.info.t4.sub1")}</p>
        </div>
    </>
  )
}

export default Mails