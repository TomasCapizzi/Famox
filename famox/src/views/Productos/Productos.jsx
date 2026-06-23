import Categorias from 'components/Home/Categorias'
import {Helmet} from 'react-helmet-async';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Productos() {
  const {t} = useTranslation();
  return (
    <section className='productos'>
        <Helmet>
          <title>Productos</title>
          <meta name="description" content="Aquí podra observar nuestros productos en sus 4 categorías. Gasoterapia, Unidades de Suministro, Accesorios y Equipos Digitales." />
        </Helmet>
        <h1>{t("productos.title")}</h1>
        <div>
            <Categorias/>
        </div>
    </section>
  )
}

export default Productos