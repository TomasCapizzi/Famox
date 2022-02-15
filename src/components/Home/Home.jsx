import Carrusel from './Carrusel';
import Categoria from './Categoria/Categoria';
import Categorias from './Categorias';
import React from 'react';
import RedesSociales from '../RedesSociales/RedesSociales';

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