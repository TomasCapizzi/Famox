import {FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

import React from 'react';
import useIntersection from 'hooks/intersectionObserver/useIntersection';

function RedesSociales() {

  const {isIntersecting, elementRef} = useIntersection({})

  return <div className={isIntersecting ? 'rrss int' : 'rrss'} ref={elementRef}>
      <a href="https://api.whatsapp.com/send?phone=5491134276306&text=Hola%20Famox!%20Estoy%20interesado%20en%20consultar%20sobre..." target='_blank' rel="noreferrer"><FaWhatsapp id='wpp'/></a>
      <a href="https://www.instagram.com/famox_sa/?hl=es-la" target='_blank' rel="noreferrer"><FaInstagram id='insta'/></a>
      <a href="https://www.linkedin.com/company/famoxsa/" target='_blank' rel="noreferrer"><FaLinkedin id='lin'/></a>
  </div>;
}

export default RedesSociales;
