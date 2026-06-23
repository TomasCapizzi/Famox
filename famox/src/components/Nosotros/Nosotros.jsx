import React from 'react'
import { useTranslation } from 'react-i18next'

function Nosotros() {
  const {t} = useTranslation();
  return (
    <div  className='seccion2'>
        <h2>{t("nosotros.title2")}</h2>
        <p>{t("nosotros.txt2")}</p>
    </div>
  )
}

export default Nosotros