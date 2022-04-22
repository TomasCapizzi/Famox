import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md';
import React, {useRef} from 'react';

function CarruselMini() {

    const btnAnterior = useRef();
    const btnSiguiente = useRef();
    const containerRef = useRef();
    const contenidoRef = useRef();
    const carrusel = useRef();

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
/*
    function abrirImg(posicion){
        console.log(contenidoRef.current.childNodes[posicion-1].childNodes[0].childNodes[0].childNodes[0]);
        const img = contenidoRef.current.childNodes[posicion-1].childNodes[0].childNodes[0].childNodes[0].classList.toggle('img-modal')
    }*/


  return (
    <section className='carrusel-mini'>
        <h2>Conocenos</h2>
        <article className='container' id='container' ref={containerRef}>
            <button className='btn-img ant' ref={btnAnterior} onClick={()=>mover(1)}><MdOutlineArrowBackIosNew/></button>
            <div className='contenido' id='contenido' ref={contenidoRef}>
                <div className='carrusel' ref={carrusel}>
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto1.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto2.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto3.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto4.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto5.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto6.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto7.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto8.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto9.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto10.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto11.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto12.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto13.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto14.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto15.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto16.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto17.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto18.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto19.png" alt="imagen" />
                        </picture>
                    </div>
                </div>
                <div className="carrusel">
                    <div>
                        <picture>
                            <img src="img/CarruselMini/foto20.png" alt="imagen" />
                        </picture>
                    </div>
                </div>                
            </div>
            <button className='btn-img sig' ref={btnSiguiente} onClick={()=>mover(2)}><MdOutlineArrowForwardIos/></button>
        </article>
    </section>
  )
}

export default CarruselMini