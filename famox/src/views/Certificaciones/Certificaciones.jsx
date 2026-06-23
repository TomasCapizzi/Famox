import ANMAT from 'components/Certificaciones/ANMAT'
import {Helmet} from 'react-helmet-async';
import ISO13485 from 'components/Certificaciones/ISO13485'
import ISO9001 from 'components/Certificaciones/ISO9001'
import { useTranslation } from 'react-i18next';

function Certificaciones() {

  const {t} = useTranslation();

  return (
    <section className='certificaciones'>
      <Helmet>
        <title>Certificaciones</title>
        <meta name="description" content="En Famox nos focalizamos en la innovación, el desarrollo y la calidad de nuestro servicio. Poseemos certificaciones ISO 9001, ISO13485 y ANMAT." />
      </Helmet>
      <h1>{t("certif.title")}</h1>
      <article className='seccion1'>
          <img src="img/certif.jpg" alt="Certificaciones" />
      </article>
      <ISO9001/>
      <ISO13485/>
      <ANMAT/>
    </section>
  )
}

export default Certificaciones