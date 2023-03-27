import Bienvenida from 'components/Nosotros/Bienvenida';
import Calidad from 'components/Nosotros/Calidad';
import {Helmet} from 'react-helmet';
import Mision from 'components/Nosotros/Mision';
import Nosotros from 'components/Nosotros/Nosotros';
import React from 'react';

function Historia() {
  return (
    <section className='historia'>
      <Helmet>
        <title>Famox SA</title>
        <meta name="description" content="Conoce la historia de Famox, una joven empresa que se ha posicionado en el mercado local y Sudamérica como fabricante de equipos de Gasoterpia y Unidades de Suministro." />
      </Helmet>
      <h1>Bienvenido a Famox</h1>
      <Bienvenida/>
      <Nosotros/>
      <Mision/>
      <Calidad/>
    </section>
  )
}

export default Historia;