import React from 'react'

function BotomComprar({accesorios, setAccesorios, agregarAlCarrito, toggleModal}) {
  const comprar = ()=>{
    accesorios.forEach(acc => agregarAlCarrito(acc, accesorios,setAccesorios));
    setAccesorios([])
    toggleModal();
  }
  return (
      accesorios.length ? <button className='acc-btn-comprar' onClick={comprar}>Comprar</button> : null    
  )
}

export default BotomComprar