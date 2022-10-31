import {HiOutlineDownload} from 'react-icons/hi'
import React from 'react';

function Aviso() {
  return (
    <article className='aviso'>
      <img src="img/Banners/Catalogo.jpg" alt="Catalogo" />
      <div>
        <p>¡Nuevo Catálogo!</p>
        <button><a href="http://famox-env.eba-8tvz54ez.sa-east-1.elasticbeanstalk.com/catalogo/Catalogo.pdf" target='_black'>Descargar <HiOutlineDownload/></a></button>
      </div>
        
    </article>
  )
}

export default Aviso