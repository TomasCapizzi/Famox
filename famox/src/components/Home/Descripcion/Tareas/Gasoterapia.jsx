import { useTranslation } from 'react-i18next'

function Gasoterapia({isIntersecting}) {
  const {t} = useTranslation();
  return (
    <article className={isIntersecting ? 'tarea on' : 'tarea off'}>
        <p className='nro'>01</p>
        <div>
            <h2>{t("home.descripcionCategorias.b.title")}</h2>
            <p>{t("home.descripcionCategorias.b.descrip")}</p>
        </div>

    </article>
  )
}

export default Gasoterapia