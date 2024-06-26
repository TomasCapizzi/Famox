import React from 'react';
import ImageWithText from './ImageWithText';
import ImageWithLink from './ImageWithLink';
import ImageWithTitle from './ImageWithTitle';
import Image from './Image';

function Carrusel() {

  return (
      <div className='carrusel-container'>
        <ul className='carrusel'>
            <ImageWithTitle id='slide1' title='¡Nuevo Catálogo Digital!' linkText='Ver Catálogo' linkRef='/catalogo/Catalogo-Famox.pdf' imageRoute="img/Carrusel/1.webp" />
            <ImageWithText id='slide2' title='¡Nuevo Producto!' linkText='Ver más' linkRef='gasoterapia/6679b7a1f1dcae9a006f009d' imageRoute='img/Carrusel/2.webp'/>
            <ImageWithText id='slide3' title='Frasco Colector con Llave Dosificadora' linkText='Ver más' linkRef='/gasoterapia/62165b9451ec36874da74b06' imageRoute='img/Carrusel/3.webp'/>
            <ImageWithLink id='slide4' linkText='Ver más' linkRef='/equipos-digitales' imageRoute='img/Carrusel/4.webp'/>
            <ImageWithLink id='slide5' linkText='Ver más' linkRef='/gasoterapia/646e1ccfd04fdec352243f6a' imageRoute='img/Carrusel/5.webp'/>
            <ImageWithTitle id='slide6' title='Recibimos la visita del Presidente de la Agencia I+D+i' linkText='Ver Video' linkRef='https://www.instagram.com/p/CxvS7AeuqgF/?hl=es-la' imageRoute='img/Carrusel/6.webp'/>
            <Image imageRoute="img/Carrusel/7.webp"/>
            <Image imageRoute="img/Carrusel/8.webp"/>
            <Image imageRoute="img/Carrusel/9.webp"/>
        </ul>
    </div>
  )
}

export default Carrusel;
