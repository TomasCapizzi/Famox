import Bienvenida from 'components/Nosotros/Bienvenida';
import Calidad from 'components/Nosotros/Calidad';
import {Helmet} from 'react-helmet-async';
import Mision from 'components/Nosotros/Mision';
import Nosotros from 'components/Nosotros/Nosotros';
import { useTranslation } from 'react-i18next';

function Historia() {
  const {t} = useTranslation();
  return (
    <section className='historia'>
        <Helmet>
        <title>Famox SA</title>
        <meta name="description" content="Conoce la historia de Famox, una joven empresa que se ha posicionado en el mercado local y Sudamérica como fabricante de equipos de Gasoterpia y Unidades de Suministro." />
      </Helmet>
      <header className="historia__header">
        <span className="historia__eyebrow">
          {t("nosotros.page.eyebrow")}
        </span>
        <h1>{t("nosotros.page.title")}</h1>
        <p>{t("nosotros.page.description")}</p>
      </header>
      <Bienvenida/>
      <Nosotros/>
      <Mision/>
      <Calidad/>
    </section>
  )
}

export default Historia;