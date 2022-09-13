import React from 'react'

function IluminacionItem({item, obtenerCantidadInput}) {
  return (
    <article className='luz'>
    <p>{item}</p>
    <div>
        <p>Cantidad: </p>
        <input type="number" name="cantidad" id="" placeholder='0' min={0} onChange={(e)=>obtenerCantidadInput(e, item)} />
    </div>
</article>
  )
}

export default IluminacionItem;