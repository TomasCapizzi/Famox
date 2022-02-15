import Categorias from '../Home/Categorias'
import React from 'react'

function Productos() {
  return (
    <section className='productos'>
        <h1>Nuestros Productos</h1>
        <div>
            <Categorias/>
        </div>
    </section>
  )
}

export default Productos