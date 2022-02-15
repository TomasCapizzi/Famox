import Form from './Form/Form'
import Info from './Info/Info'
import React from 'react'
import RedesSociales from '../RedesSociales/RedesSociales'

function Contacto() {
  return (
    <section className='contacto'>
        <h1>¡Contactanos!</h1>
        <div className='data'>
            <Form/>
            <Info/>
        </div>
        <RedesSociales/>
    </section>
  )
}

export default Contacto