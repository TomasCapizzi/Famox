import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md';
import React, {useRef} from 'react';

import Imagen from './Imagen';

function CarruselMini() {

    const btnAnterior = useRef();
    const btnSiguiente = useRef();
    const containerRef = useRef();
    const contenidoRef = useRef();

    function mover(valor){
        // Track
        const anchoContenido = contenidoRef.current.offsetWidth;
        // List
        const anchoContainer = containerRef.current.offsetWidth;  

        let leftPosition;

        contenidoRef.current.style.left === '' ? leftPosition = contenidoRef.current.style.left = 0 : leftPosition = parseFloat(contenidoRef.current.style.left.slice(0,-2)*-1)

        if(leftPosition < (anchoContenido - anchoContainer) && valor === 2){
            contenidoRef.current.style.left = `${-1 * (leftPosition + contenidoRef.current.childNodes[1].offsetWidth )}px`
        } else if(leftPosition > 0 && valor === 1){
            contenidoRef.current.style.left = `${-1 * (leftPosition - contenidoRef.current.childNodes[1].offsetWidth )}px`
        }
    }

  return (
    <section className='carrusel-mini'>
        <h2>Conocenos</h2>
        <article className='container' id='container' ref={containerRef}>
            <button className='btn-img ant' ref={btnAnterior} onClick={()=>mover(1)}><MdOutlineArrowBackIosNew/></button>
            <div className='contenido' id='contenido' ref={contenidoRef}>
                <Imagen ruta={"img/CarruselMini/foto1.png"} />
                <Imagen ruta={"img/CarruselMini/foto2.png"} />
                <Imagen ruta={"img/CarruselMini/foto3.png"} />
                <Imagen ruta={"img/CarruselMini/foto4.png"} />
                <Imagen ruta={"img/CarruselMini/foto5.png"} />
                <Imagen ruta={"img/CarruselMini/foto6.png"} />
                <Imagen ruta={"img/CarruselMini/foto7.png"} />
                <Imagen ruta={"img/CarruselMini/foto8.png"} />
                <Imagen ruta={"img/CarruselMini/foto9.png"} />
                <Imagen ruta={"img/CarruselMini/foto10.png"} />
                <Imagen ruta={"img/CarruselMini/foto11.png"} />
                <Imagen ruta={"img/CarruselMini/foto12.png"} />
                <Imagen ruta={"img/CarruselMini/foto13.png"} />
                <Imagen ruta={"img/CarruselMini/foto14.png"} />
                <Imagen ruta={"img/CarruselMini/foto15.png"} />
                <Imagen ruta={"img/CarruselMini/foto16.png"} />
                <Imagen ruta={"img/CarruselMini/foto17.png"} />
                <Imagen ruta={"img/CarruselMini/foto18.png"} /> 
                <Imagen ruta={"img/CarruselMini/foto19.png"} /> 
                <Imagen ruta={"img/CarruselMini/foto20.png"} />             
            </div>
            <button className='btn-img sig' ref={btnSiguiente} onClick={()=>mover(2)}><MdOutlineArrowForwardIos/></button>
        </article>
    </section>
  )
}

export default CarruselMini