import Carrusel from 'components/Home/Carrusel/Carrusel';
import CarruselMini from 'components/Home/Carrusel2/CarruselMini';
import Categorias from 'components/Home/Categorias';
import DescripcionTareas from 'components/Home/Descripcion/DescripcionTareas';
import {Helmet} from 'react-helmet';
import React from 'react';
import RedesSociales from 'components/RedesSociales/RedesSociales';

function Home() {
  return (
  <div className='home'>
    <Helmet>
      <title>Famox - Inicio</title>
      <meta name="description" content="Famox es una empresa argentina moderna e innovadora, con mas de 20 años de experiencia en el ámbito hospitalario como fabricantes de productos médicos de alta calidad." />
    </Helmet>
    <Carrusel/>
    <Categorias />
    <DescripcionTareas />
    <CarruselMini/>
    <div className='rrss-container'><RedesSociales/></div>
  </div>
  )
}

export default Home;