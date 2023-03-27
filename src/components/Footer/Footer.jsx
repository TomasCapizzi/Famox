import {Link} from 'react-router-dom'
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='footer-cabecera'>
        <img src="img/Logo.png" alt="logo famox" />
      </div>
      <div className='footer-info'>
        <div className='footer-links'>
          <h5>Famox SA</h5>
          <Link to='/nosotros'>
            <p>¿Quiénes somos?</p>
          </Link>

          <Link to='/preguntas-frecuentes'>
            <p>Preguntas frecuentes</p>
          </Link>

          <Link to='/productos'>
            <p>Nuestros productos</p>
          </Link>
        </div>
        <div className='footer-contacto'>
          <h5>Contáctanos</h5>
          <p>4687-8417//6073-6020</p>
          <p>info@famox.com.ar</p>
          <p>atencion.cliente@famox.com.ar</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
