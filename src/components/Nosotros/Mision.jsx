import React from 'react'
import useIntersection from 'hooks/intersectionObserver/useIntersection'

function Mision() {

  const {isIntersecting, elementRef} = useIntersection({})

  return (
    <div  className='seccion3' ref={elementRef} >
        <img src="img/Nosotros/nos2.jpg" alt="Punzonadora" className={isIntersecting ? 'in' : 'out'} />
        <div>
            <h2>Nuestra misión</h2>
            <p>Cada día y durante el transcurso de los años, Famox ha buscado y busca, la mejora continua de sus equipos con el claro objetivo de proveer a sus clientes, productos sobre los cuales los distintos organismos de Salud depositan su total confianza en el uso cotidiano, para que de esa manera la atención y cuidado a sus pacientes sea de un nivel de excelencia.</p>
        </div>
    </div>
  )
}

export default Mision