import Aviso from 'components/Home/Aviso';
import Carrusel from 'components/Home/Carrusel';
import CarruselMini from 'components/Home/CarruselMini';
import Categorias from 'components/Home/Categorias';
import DescripcionTareas from 'components/Home/Descripcion/DescripcionTareas';
import React from 'react';
import RedesSociales from 'components/RedesSociales/RedesSociales';

function Home() {
  return (
  <div className='home'>
    <Carrusel/>
    <Aviso/>
    <Categorias />
    <DescripcionTareas />
    <CarruselMini/>
    <div className='rrss-container'><RedesSociales/></div>
  </div>
  )
}

export default Home;