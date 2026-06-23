import FotoSlider from './FotoSlider'
import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection'
import { useTranslation } from 'react-i18next'

function Obra({obra}) {
  console.log(obra)

  const {isIntersecting, elementRef} = useIntersection({})
  const {t} = useTranslation();

  return (
    <article className={isIntersecting ? 'obra in' : 'obra out'} ref={elementRef}>
      <div className='obra-descrip'>
        <h3>{obra.obra}</h3>
        <p>{t("misc.b")} {obra.fecha}</p>
      </div>
      {//      <img src={obra.img} alt="Obra" />
      }
      <FotoSlider obra={obra} />
      <h5>{t("misc.c")}</h5>
      <ul>
        {
            obra.instalacion.map(
                inst => <li key={inst.t}>{inst.t}</li>
            )
        }
      </ul>

    </article>
  )
}

export default Obra