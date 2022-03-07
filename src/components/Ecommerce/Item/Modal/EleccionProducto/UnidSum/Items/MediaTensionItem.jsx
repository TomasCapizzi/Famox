import React from 'react'

function MediaTensionItem({item}) {
  return (
    <article className='mediatension'>
        <p>{item}</p>
        <div>
            <p>Cantidad: </p>
            <input type="number" name="cantidad" id="" />
        </div>
    </article>
  )
}

export default MediaTensionItem