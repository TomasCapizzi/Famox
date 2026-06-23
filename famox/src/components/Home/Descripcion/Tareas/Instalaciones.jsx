import { useTranslation } from "react-i18next"


function Instalaciones({isIntersecting}) {
  const {t} = useTranslation()
  return (
    <div className={isIntersecting ? 'tarea on' : 'tarea off'}>
        <p className='nro'>04</p>
        <div>
            <h2>{t("home.descripcionCategorias.d.title")}</h2>
            <p>{t("home.descripcionCategorias.d.descrip")}</p>
        </div>
    </div>
  )
}

export default Instalaciones