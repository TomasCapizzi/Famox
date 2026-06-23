import {Helmet} from 'react-helmet-async';
import React from 'react';
import { useTranslation } from 'react-i18next';

function PregFrec() {
    const {t} = useTranslation();
  return (
    <section className='pregfrec'>
        <Helmet>
            <title>Preguntas frecuentes</title>
        </Helmet>
        <h1>{t("pregfrec.title")}</h1>
        <article className='seccion'>
            <h4>{t("pregfrec.q1.q")}</h4>
            <div className='res'>
                <p>{t("pregfrec.q1.a1")}</p>
                <ul>
                    <li>{t("pregfrec.q1.a2")}</li>
                    <li>{t("pregfrec.q1.a3")}</li>
                    <li>{t("pregfrec.q1.a4")}</li>
                </ul>
            </div>            
        </article>
        <article className='seccion'>
            <h4>{t("pregfrec.q2.q")}</h4>
            <p>{t("pregfrec.q2.a")}</p>     
        </article>
        <article className='seccion'>
            <h4>{t("pregfrec.q3.q")}</h4>
            <p>{t("pregfrec.q3.a")}</p>           
        </article>
        <article className='seccion'>
            <h4>{t("pregfrec.q4.q")}</h4>
            <p>{t("pregfrec.q4.a")}</p>
        </article>
        <article className='seccion'>
            <h4>{t("pregfrec.q5.q")}</h4>
            <p>{t("pregfrec.q5.a")}</p>         
        </article>
        <article className='seccion'>
            <h4>{t("pregfrec.q6.q")}</h4>
            <p>{t("pregfrec.q6.a")}</p>          
        </article>
    </section>
  )
}

export default PregFrec