import { useTranslation } from "react-i18next"

function ISO9001() {

  const {t} = useTranslation();

  return (
    <article className='seccion2'>
        <h2>{t("certif.c1.title")}</h2>
        <div className='seccion-info'>
            <img src="img/Iram9001.png" alt="iram 9001" />
            <p>{t("certif.c1.txt")}</p>
        </div>
    </article>
  )
}

export default ISO9001