import React from 'react'

function Image({imageRoute}) {
  return (
    <li>
        <img src={imageRoute} alt="Imagen de Carrusel" />
    </li>
  )
}

export default Image