import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection'
import { useTranslation } from 'react-i18next'

function Mision() {

  const {isIntersecting, elementRef} = useIntersection({})
  const {t} = useTranslation();

  return (
    <div  className='seccion3' ref={elementRef} >
        <img src="img/Nosotros/nos2.jpg" alt="Punzonadora" className={isIntersecting ? 'in' : 'out'} />
        <div>
            <h2>{t("nosotros.title3")}</h2>
            <p>{t("nosotros.txt3")}</p>
        </div>
    </div>
  )
}

export default Mision