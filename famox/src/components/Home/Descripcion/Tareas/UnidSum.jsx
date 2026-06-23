import { useTranslation } from 'react-i18next'

function UnidSum({isIntersecting}) {
  const {t} = useTranslation();
  return (
    <article className={isIntersecting ? 'tarea on' : 'tarea off'}>
        <p className='nro'>02</p>
        <div>
            <h2>{t("home.descripcionCategorias.a.title")}</h2>
            <p>{t("home.descripcionCategorias.a.descrip")}</p>
        </div>
    </article>
  )
}

export default UnidSum