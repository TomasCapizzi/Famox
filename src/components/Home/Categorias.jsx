import Categoria from './Categoria/Categoria'
import React from 'react'

function Categorias() {
  return (
    <div className='categorias-container'>
        <Categoria titulo='Unidades de Suministro' img='img/Categorias/unidadesSuministro.webp' link='/unidades-de-suministro' />
        <Categoria titulo='Gasoterapia' img='img/Categorias/gasoterapia.webp' link='/gasoterapia' />
        <Categoria titulo='Accesorios' img='img/Categorias/accesorios.webp' link='accesorios' />
        <Categoria titulo='Equipos Digitales' img='img/Categorias/llamadores.webp' link='/equipos-digitales'/>
    </div>
  )
}

export default Categorias