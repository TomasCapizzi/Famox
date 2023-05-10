import {HiOutlineDownload} from 'react-icons/hi'
import React from 'react';

function Aviso() {
  return (
    <article className='aviso'>
      <img src="img/Banners/Catalogo.jpg" alt="Catálogo famox" />
      <div>
        <p>¡Nuevo Catálogo!</p>
        <button name='Descarga de catálogo'><a href="/catalogo/Catalogo-Famox.pdf" target='_black'>Descargar <HiOutlineDownload/></a></button>
      </div>
    </article>
  )
}

export default Aviso