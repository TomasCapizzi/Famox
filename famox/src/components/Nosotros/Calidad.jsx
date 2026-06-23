import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection'
import { useTranslation } from 'react-i18next'

function Calidad() {
  const {isIntersecting, elementRef} = useIntersection({})
  const {t} = useTranslation();
  return (
    <div  className='seccion4' ref={elementRef}>
        <div>
            <h2>{t("nosotros.title4")}</h2>
            <p>{t("nosotros.txt4")}</p>
        </div>
        <img src="img/Nosotros/nos3.jpg" alt="Reguladora de Baja" className={isIntersecting ? 'in' : 'out'} />
    </div>
  )
}

export default Calidad