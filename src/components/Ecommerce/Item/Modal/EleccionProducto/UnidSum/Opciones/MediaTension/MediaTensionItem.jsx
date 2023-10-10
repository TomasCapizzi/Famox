import React from 'react'

function MediaTensionItem({item, obtenerCantidadInput}) {
  return (
    <article className='mediatension'>
        <p>{item}</p>
        <div>
            <p htmlFor="cantidad">Cantidad: </p>
            <input type="number" name="cantidad" placeholder='0' min={0} onChange={(e)=>obtenerCantidadInput(e, item)} />
        </div>
    </article>
  )
}

export default MediaTensionItem