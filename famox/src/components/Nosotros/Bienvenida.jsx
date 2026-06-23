import React from 'react'
import { useTranslation } from 'react-i18next'

function Bienvenida() {
  const {t} = useTranslation();
  return (
    <div className='seccion1'>
        <img src="img/Nosotros/nos1.jpg" alt="Mezclador de gases" />
        <p>{t("nosotros.txt1")}</p>
    </div>
  )
}

export default Bienvenida