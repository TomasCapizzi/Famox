import Banner from 'components/CheckOut/Banner'
import React from 'react'

function CheckOut() {
  return (
    <section className='checkout'>
      <Banner/>        
      <h3>¡Pedido de Cotización confirmado!</h3>
      <p>Te estaremos respondiendo a la brevedad. Recuerda revisar tu casilla de spam si no encuentras nuestro email.</p>
    </section>
  )
}

export default CheckOut