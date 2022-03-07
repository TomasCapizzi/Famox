import React from 'react'

function BajaTensionItem({item}) {
  return (
    <article className='bajatension'>
        <p>{item}</p>
        <div>
            <p>Cantidad: </p>
            <input type="number" name="cantidad" id="" />
        </div>
    </article>
  )
}

export default BajaTensionItem