import {GoPrimitiveDot} from 'react-icons/go'
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
            <li id='slide8'>
                <img src="img/Carrusel/8.jpg" alt="Carrusel 8" />
            </li>
            <li id='slide9'>
                <img src="img/Carrusel/9.jpg" alt="Carrusel 9" />
            </li>
        </ul>
        <ul className='enlaces'>
            <li>
                <a href="#slide1"><GoPrimitiveDot/></a>
            </li>
            <li>
                <a href="#slide1"><GoPrimitiveDot/></a>
            </li>
            <li>
                <a href="#slide1"><GoPrimitiveDot/></a>
            </li>
            <li>
                <a href="#slide1"><GoPrimitiveDot/></a>
            </li>
            <li>
                <a href="#slide1"><GoPrimitiveDot/></a>
            </li>
            <li>
                <a href="#slide1"><GoPrimitiveDot/></a>
            </li>
            <li>
                <a href="#slide1"><GoPrimitiveDot/></a>
            </li>
        </ul>
    </div>
  )
}

export default Carrusel;
