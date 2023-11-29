import Categorias from 'components/Home/Categorias'
import {Helmet} from 'react-helmet';
import React from 'react';

function Productos() {
  return (
    <section className='productos'>
      <Helmet>
        <title>Productos</title>
        <meta name="description" content="Aquí podra observar nuestros productos en sus 4 categorías. Gasoterapia, Unidades de Suministro, Accesorios y Equipos Digitales." />
      </Helmet>
        <h1>Nuestros Productos</h1>
        <div>
            <Categorias/>
        </div>
    </section>
  )
}

export default Productos