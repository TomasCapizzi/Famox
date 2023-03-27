import React,{useRef} from 'react'

import Descripcion from './Descripcion';
import EleccionAccesorio from './EleccionProducto/Accesorios/EleccionAccesorio';
import EleccionGasoterapia from './EleccionProducto/Gasoterapia/EleccionGasoterapia';
import EleccionUnidSum from './EleccionProducto/UnidSum/EleccionUnidSum';
import {TiDelete} from 'react-icons/ti';

function Modal({item, toggleModal}) {
  const containerModalRef = useRef();
  const modalWinwowRef = useRef()
  return (
    <section className='modal-container' ref={containerModalRef} onClick={(e)=> toggleModal(e,containerModalRef, modalWinwowRef)}>
      <article className='modal' ref={modalWinwowRef} onClick={(e)=> toggleModal(e,containerModalRef, modalWinwowRef)}>
        <button onClick={()=> toggleModal()} className='btn-cerrar'><TiDelete/></button>
        <Descripcion item={item} />
        {
          item.gasoterapia ? <EleccionGasoterapia item={item} toggleModal={toggleModal} /> :  item.accesorio ? <EleccionAccesorio item={item} toggleModal={toggleModal} /> : <EleccionUnidSum item={item} toggleModal={toggleModal} />
        }
      </article>      
    </section>
  )
}

export default Modal;