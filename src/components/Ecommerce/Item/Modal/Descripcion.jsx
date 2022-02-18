import React from 'react'

function Descripcion({item}) {
  return (
    <div className='modal-descripcion'>
        <h3>{item.nombre}</h3>
        <img src={item.img} alt="imagen" />
    </div>
  )
}

export default Descripcion