import Categoria from './Categoria/Categoria'
import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection'

function Categorias() {

  const {isIntersecting, elementRef} = useIntersection();
  return (
    <div className='categorias-container' ref={elementRef}>
        <Categoria titulo='Unidades de Suministro' img='img/Categorias/unidadesSuministro.webp' link='/unidades-de-suministro' isIntersecting={isIntersecting}/>
        <Categoria titulo='Gasoterapia' img='img/Categorias/gasoterapia.webp' link='/gasoterapia' isIntersecting={isIntersecting}/>
        <Categoria titulo='Accesorios' img='img/Categorias/accesorios.webp' link='accesorios' isIntersecting={isIntersecting}/>
        <Categoria titulo='Equipos Digitales' img='img/Categorias/llamadores.webp' link='/equipos-digitales' isIntersecting={isIntersecting}/>
    </div>
  )
}

export default Categorias