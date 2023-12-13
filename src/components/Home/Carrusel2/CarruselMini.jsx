import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md';
import React, {useRef} from 'react';

import Imagen from './Imagen';
import useCarrusel2 from 'hooks/carrusel/useCarrusel2';

function CarruselMini() {

  const btnAnterior = useRef();
  const btnSiguiente = useRef();
  const containerRef = useRef();
  const contenidoRef = useRef();
  
  const {mover} = useCarrusel2(contenidoRef, containerRef);
    
  return (
    <section className='carrusel-mini' >
        <h2>Conocenos</h2>
        <article className='container' id='container' ref={containerRef}>
            <button className='btn-img ant' aria-label='Ir a la imagen anterior' name='Anterior imagen' ref={btnAnterior} onClick={()=>mover(1)}><MdOutlineArrowBackIosNew/></button>
            <div className='contenido' id='contenido' ref={contenidoRef}>
                <Imagen ruta={"img/CarruselMini/foto1.webp"} />
                <Imagen ruta={"img/CarruselMini/foto2.webp"} />
                <Imagen ruta={"img/CarruselMini/foto3.webp"} />
                <Imagen ruta={"img/CarruselMini/foto4.webp"} />
                <Imagen ruta={"img/CarruselMini/foto5.webp"} />
                <Imagen ruta={"img/CarruselMini/foto6.webp"} />
                <Imagen ruta={"img/CarruselMini/foto7.webp"} />
                <Imagen ruta={"img/CarruselMini/foto8.webp"} />
                <Imagen ruta={"img/CarruselMini/foto9.webp"} />
                <Imagen ruta={"img/CarruselMini/foto10.webp"} />
                <Imagen ruta={"img/CarruselMini/foto11.webp"} />
                <Imagen ruta={"img/CarruselMini/foto12.webp"} />
                <Imagen ruta={"img/CarruselMini/foto13.webp"} />
                <Imagen ruta={"img/CarruselMini/foto14.webp"} />
                <Imagen ruta={"img/CarruselMini/foto15.webp"} />
                <Imagen ruta={"img/CarruselMini/foto16.webp"} />
                <Imagen ruta={"img/CarruselMini/foto17.webp"} />
                <Imagen ruta={"img/CarruselMini/foto18.webp"} /> 
                <Imagen ruta={"img/CarruselMini/foto19.webp"} /> 
                <Imagen ruta={"img/CarruselMini/foto20.webp"} />             
            </div>
            <button className='btn-img sig' aria-label='Ir a la imagen siguiente' name='Siguiente imagen' ref={btnSiguiente} onClick={()=>mover(2)}><MdOutlineArrowForwardIos/></button>
        </article>
    </section>
  )
}

export default CarruselMini