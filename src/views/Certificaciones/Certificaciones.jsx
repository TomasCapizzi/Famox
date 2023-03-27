import ANMAT from 'components/Certificaciones/ANMAT'
import {Helmet} from 'react-helmet';
import ISO13485 from 'components/Certificaciones/ISO13485'
import ISO9001 from 'components/Certificaciones/ISO9001'
import PoliticaCalidad from 'components/Certificaciones/PoliticaCalidad'
import React from 'react';

function Certificaciones() {
  return (
    <section className='certificaciones'>
      <Helmet>
        <title>Certificaciones</title>
        <meta name="description" content="En Famox nos focalizamos en la innovación, el desarrollo y la calidad de nuestro servicio. Poseemos certificaciones ISO 9001, ISO13485 y ANMAT." />
      </Helmet>
      <h1>Certificaciones</h1>
      <article className='seccion1'>
          <img src="img/certif.jpg" alt="Certificaciones" />
          <PoliticaCalidad/>
      </article>
      <ISO9001/>
      <ISO13485/>
      <ANMAT/>
    </section>
  )
}

export default Certificaciones