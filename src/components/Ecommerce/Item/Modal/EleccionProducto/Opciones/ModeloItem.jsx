import React from 'react'

function ModeloItem({modelo, seleccionarElemento}) {
  return (
    <div className='modal-modelo' onClick={()=> seleccionarElemento(modelo)} >
        <h4 className={modelo.img ? '' : 'btn' }>{modelo.nombre}</h4>
        {
          modelo.img && <img src={modelo.img} alt="modelo" />
        }
        
    </div>
  )
}

export default ModeloItem