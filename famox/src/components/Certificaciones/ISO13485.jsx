import { useTranslation } from "react-i18next"

function ISO13485() {

  const {t} = useTranslation();

  return (
    <article className='seccion3'>
        <h2>{t("certif.c2.title")}</h2>
        <div className='seccion-info'>
            <img src="img/Iram13485.png" alt="iram 13485" />
            <p>{t("certif.c2.txt")}</p>
        </div>
    </article>
  )
}

export default ISO13485