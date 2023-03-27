import React from 'react'

function Descripcion({item}) {
  
  const anchoPantalla = window.innerWidth;

  return (
    <div className='modal-descripcion'>
        <h3>{item.nombre}</h3>
        <img src={anchoPantalla>1024 && item.portada? item.portada : item.img} alt={item.nombre} />
    </div>
  )
}

export default Descripcion;