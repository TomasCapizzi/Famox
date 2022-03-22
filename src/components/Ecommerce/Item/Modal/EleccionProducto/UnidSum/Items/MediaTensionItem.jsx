import React from 'react'

function MediaTensionItem({item, obtenerCantidadInput}) {
  return (
    <article className='mediatension'>
        <p>{item}</p>
        <div>
            <label>Cantidad: </label>
            <input type="number" name="cantidad" id="" placeholder='0' min={0} onChange={(e)=>obtenerCantidadInput(e, item)} />
        </div>
    </article>
  )
}

export default MediaTensionItem