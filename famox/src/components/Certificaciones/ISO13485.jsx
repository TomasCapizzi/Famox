import { useTranslation } from "react-i18next"

function ISO13485() {

  const {t} = useTranslation();

  return (
    <article className='seccion3'>
        <h2>{t("certif.c2.title")}</h2>
        <div className='seccion-info'>
            <img
              src="/img/Certificaciones/IRAM13485.webp"
              alt="IRAM e IQNet - ISO 13485:2019"
              loading="lazy"
            />
            <p>{t("certif.c2.txt")}</p>
        </div>
    </article>
  )
}

export default ISO13485