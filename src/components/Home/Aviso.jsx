import {HiOutlineDownload} from 'react-icons/hi'
import React from 'react';
import useIntersection from 'hooks/intersectionObserver/useIntersection';

function Aviso() {

  const {isIntersecting, elementRef} = useIntersection({threshold: '0.7'});

  return (
    <article className={isIntersecting? 'aviso in' : 'aviso out'} ref={elementRef} >
      <img src="img/Banners/Catalogo.jpg" alt="Catálogo famox" />
      <div>
        <p>¡Nuevo Catálogo!</p>
        <button name='Descarga de catálogo'><a href="/catalogo/Catalogo-Famox.pdf" target='_black'>Descargar <HiOutlineDownload/></a></button>
      </div>
    </article>
  )
}

export default Aviso