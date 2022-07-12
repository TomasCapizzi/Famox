import React from 'react'

function ModeloItem({modelo, seleccionarElemento}) {
  return (
    <tr className='modal-modelo' onClick={()=> seleccionarElemento(modelo)} >
      <td><img src={modelo.img} alt="modelo" /></td>
      <td className={modelo.img ? '' : 'btn' }>{modelo.nombre}</td>
      <td>{modelo.rango? `${modelo.uso}, ${modelo.rango}` : modelo.uso}</td>        
    </tr>
  )
}

export default ModeloItem
