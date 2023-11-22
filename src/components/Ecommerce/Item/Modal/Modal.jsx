import React,{useRef} from 'react'

import EleccionAccesorio from './EleccionProducto/Accesorios/EleccionAccesorio';
import EleccionGasoterapia from './EleccionProducto/Gasoterapia/EleccionGasoterapia';
import EleccionUnidSum from './EleccionProducto/UnidSum/EleccionUnidSum';

function Modal({item, toggleModal}) {
  const containerModalRef = useRef();
  const modalWinwowRef = useRef()
  return (
    <section className='modal-container' ref={containerModalRef} onClick={(e)=> toggleModal(e,containerModalRef, modalWinwowRef)}>
      <article className='modal' ref={modalWinwowRef} onClick={(e)=> toggleModal(e,containerModalRef, modalWinwowRef)}>
        {
          item.gasoterapia ? <EleccionGasoterapia item={item} toggleModal={toggleModal} /> :  item.accesorio ? <EleccionAccesorio item={item} toggleModal={toggleModal} /> : <EleccionUnidSum item={item} toggleModal={toggleModal} />
        }
      </article>      
    </section>
  )
}

export default Modal;