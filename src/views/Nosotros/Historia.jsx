import Bienvenida from 'components/Nosotros/Bienvenida';
import Calidad from 'components/Nosotros/Calidad';
import Mision from 'components/Nosotros/Mision';
import Nosotros from 'components/Nosotros/Nosotros';
import React from 'react'

function Historia() {
  return (
    <section className='historia'>
        <h1>Bienvenido a Famox</h1>
        <Bienvenida/>
        <Nosotros/>
        <Mision/>
        <Calidad/>
    </section>
  )
}

export default Historia;