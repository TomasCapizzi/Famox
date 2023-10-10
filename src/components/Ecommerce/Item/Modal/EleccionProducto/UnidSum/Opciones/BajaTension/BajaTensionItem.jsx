import React from 'react'

function BajaTensionItem({item, obtenerCantidadInput}) {
  return (
    <article className='bajatension'>
        <p>{item}</p>
        <div>
            <p>Cantidad: </p>
            <input type="number" name="cantidad" placeholder='0' min={0} onChange={(e)=>obtenerCantidadInput(e, item)} />
        </div>
    </article>
  )
}

export default BajaTensionItem