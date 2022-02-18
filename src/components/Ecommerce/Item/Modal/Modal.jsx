import Descripcion from './Descripcion';
import EleccionProducto from './EleccionProducto/EleccionProducto';
import React from 'react'
import {TiDelete} from 'react-icons/ti';

function Modal({item, toggleModal}) {

  return (
    <section className='modal-container'>
      <article className='modal'>
        <button onClick={()=> toggleModal()} className='btn-cerrar'><TiDelete/></button>
        <Descripcion item={item} />
        <EleccionProducto item={item} />
      </article>
      
    </section>
  )
}

export default Modal