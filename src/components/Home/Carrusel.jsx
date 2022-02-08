import React from 'react';

function Carrusel() {
  return (
      <div className='carrusel-container'>
        <ul className='carrusel'> 
            <li id='slide1'>
                <img src="img/Carrusel/1.jpg" alt="Carrusel 1" />
            </li>
            <li id='slide2'>
                <img src="img/Carrusel/2.jpg" alt="Carrusel 2" />
            </li>
            <li id='slide3'>
                <img src="img/Carrusel/3.jpg" alt="Carrusel 3" />
            </li>
            <li id='slide4'>
                <img src="img/Carrusel/4.jpg" alt="Carrusel 4" />
            </li>
            <li id='slide5'>
                <img src="img/Carrusel/5.jpg" alt="Carrusel 5" />
            </li>
            <li id='slide6'>
                <img src="img/Carrusel/6.jpg" alt="Carrusel 6" />
            </li>
            <li id='slide7'>
                <img src="img/Carrusel/7.jpg" alt="Carrusel 7" />
            </li>
        </ul>
        <ul className='enlaces'>
            <li>
                <a href="#slide1">1</a>
            </li>
            <li>
                <a href="#slide1">2</a>
            </li>
            <li>
                <a href="#slide1">3</a>
            </li>
            <li>
                <a href="#slide1">4</a>
            </li>
            <li>
                <a href="#slide1">5</a>
            </li>
            <li>
                <a href="#slide1">6</a>
            </li>
            <li>
                <a href="#slide1">7</a>
            </li>
        </ul>
    </div>
  )
}

export default Carrusel;
