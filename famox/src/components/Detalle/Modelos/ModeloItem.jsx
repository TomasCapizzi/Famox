import React from 'react'
import { useTranslation } from 'react-i18next'

function ModeloItem({item, lang}) {

  const {t} = useTranslation();
 
  return (
    <article className='modelo'>
        {
          item.img && <img src={item.img} alt="modelo" loading='lazy'/>
        }
        <h5>{item.nombre[lang]}</h5>
        {
          item.uso && <p>{item.uso[lang]}</p>
        }
        {
          item.rango && <p>{t("productos.detalle.op7")}: {item.rango[lang]}</p>
        }
        {
          item.modulos && 
          <div className='modulos'>
            <h4>{t("productos.detalle.op6")}</h4>
            <ul className='modulos-lista'>
              {
                item.modulos.map(
                  modulo => <li key={modulo}>{modulo}</li>
                )
              }
            </ul>
          </div>
        }
    </article>
  )
}

export default ModeloItem