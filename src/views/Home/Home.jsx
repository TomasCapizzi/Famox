import Carrusel from '../../components/Home/Carrusel';
import Categoria from '../../components/Home/Categoria/Categoria';
import Categorias from '../../components/Home/Categorias';
import React from 'react';
import RedesSociales from '../../components/RedesSociales/RedesSociales';

function Home() {
  return (
  <div className='home'>
    <Carrusel/>
    <Categorias />
    <div className='rrss-container'><RedesSociales/></div>
  </div>
  )
}

export default Home;