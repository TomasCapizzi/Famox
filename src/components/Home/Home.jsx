import Carrusel from './Carrusel';
import Categoria from './Categoria/Categoria';
import React from 'react';
import RedesSociales from '../RedesSociales/RedesSociales';

function Home() {
  return (
  <div className='home'>
    <Carrusel/>
    <div className='categorias-container'>
      <Categoria titulo='Unidades de Suministro' img='img/Categorias/unidadesSuministro.jpg' link='/unidades-de-suministro' />
      <Categoria titulo='Gasoterapia' img='img/Categorias/gasoterapia.jpg' link='/gasoterapia' />
      <Categoria titulo='Accesorios' img='img/Categorias/accesorios.jpg' link='accesorios' />
    </div>
    <div className='rrss-container'><RedesSociales/></div>
  </div>
  )
}

export default Home;