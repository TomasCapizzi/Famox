import React from 'react'

function CarritoVacio() {
  return (
    <section className='carro-vacio'>
        <h5>Tu carrito esta vacio ...</h5>
        <p>Dirígete al <span><a href="/ecommerce">Ecommerce</a></span> para poder seleccionar los productos de tu interés y poder pedir una cotización</p>
    </section>
    )
}

export default CarritoVacio