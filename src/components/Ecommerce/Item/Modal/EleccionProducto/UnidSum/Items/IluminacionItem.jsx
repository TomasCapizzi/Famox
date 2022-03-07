import React from 'react'

function IluminacionItem({item}) {
  return (
    <article className='luz'>
    <p>{item}</p>
    <div>
        <p>Cantidad: </p>
        <input type="number" name="cantidad" id="" />
    </div>
</article>
  )
}

export default IluminacionItem;