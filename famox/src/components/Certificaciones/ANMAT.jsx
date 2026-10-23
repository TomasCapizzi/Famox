import { useTranslation } from "react-i18next"


function ANMAT() {

  const {t} = useTranslation();

  return (
    <article className='seccion4'>
        <h2>{t("certif.c3.title")}</h2>
        <div className='seccion-info'>
            <img
              src="/img/Certificaciones/ANMAT.webp"
              alt="ANMAT - Administración Nacional de Medicamentos, Alimentos y Tecnología Médica"
              loading="lazy"
            />
            <p>{t("certif.c3.txt")}</p>
        </div>
    </article>
  )
}

export default ANMAT