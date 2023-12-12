import React from 'react'

function Descripcion({item}) {
  
  const anchoPantalla = window.innerWidth;

  return (
    <div className='item-info'>
        <h5>{item.nombre}</h5>
        <img src={anchoPantalla>1024 && item.portada? item.portada : item.img} loading='lazy' alt={item.nombre}/>
    </div>
  )
}

export default Descripcion;