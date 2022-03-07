import Descripcion from './Descripcion';
import EleccionGasoterapia from './EleccionProducto/Gasoterapia/EleccionGasoterapia';
import EleccionUnidSum from './EleccionProducto/UnidSum/EleccionUnidSum';
import React from 'react'
import {TiDelete} from 'react-icons/ti';

function Modal({item, toggleModal}) {

  return (
    <section className='modal-container'>
      <article className='modal'>
        <button onClick={()=> toggleModal()} className='btn-cerrar'><TiDelete/></button>
        <Descripcion item={item} />
        {
          item.gasoterapia ? <EleccionGasoterapia item={item} toggleModal={toggleModal} /> : <EleccionUnidSum item={item} toggleModal={toggleModal} />
        }
        
      </article>      
    </section>
  )
}

export default Modal;