import ANMAT from 'components/Certificaciones/ANMAT'
import ISO13485 from 'components/Certificaciones/ISO13485'
import ISO9001 from 'components/Certificaciones/ISO9001'
import PoliticaCalidad from 'components/Certificaciones/PoliticaCalidad'
import React from 'react'

function Certificaciones() {
  return (
    <section className='certificaciones'>
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