import Categoria from './Categoria/Categoria'
import React from 'react'

function Categorias() {
  return (
    <div className='categorias-container'>
        <Categoria titulo='Unidades de Suministro' img='img/Categorias/unidadesSuministro.jpg' link='/unidades-de-suministro' />
        <Categoria titulo='Gasoterapia' img='img/Categorias/gasoterapia.jpg' link='/gasoterapia' />
        <Categoria titulo='Accesorios' img='img/Categorias/accesorios.jpg' link='accesorios' />
        <Categoria titulo='Equipos Digitales' img='img/Categorias/llamadores.jpg' link='/equipos-digitales'/>
    </div>
  )
}

export default Categorias