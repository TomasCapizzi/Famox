import React from 'react'
import { useTranslation } from 'react-i18next'

function Calidad({isIntersecting}) {
  const {t} = useTranslation();
  return (
    <div className={isIntersecting ? 'tarea on' : 'tarea off'}>
        <p className='nro'>03</p>
        <div>
            <h2>{t("home.descripcionCategorias.c.title")}</h2>
            <p>{t("home.descripcionCategorias.c.descrip")}</p>
        </div>
    </div>
  )
}

export default Calidad