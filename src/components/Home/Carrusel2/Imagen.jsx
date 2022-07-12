import React from 'react'

function Imagen({ruta}) {
  return (
    <div className="carrusel">
        <div>
            <picture>
                <img src={ruta} alt="imagen"/>
            </picture>
        </div>
    </div>
  )
}

export default Imagen