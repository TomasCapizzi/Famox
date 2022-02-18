import React,{useRef, useState} from 'react';

import Modal from './Modal/Modal';

function Item({item}) {

  const modalRef = useRef()

  function toggleModal(){
    modalRef.current.classList.toggle('off');
  }

  return (
    <>   
      <div className='item-ecom' >
        <h5>{item.nombre}</h5>
        <img src={item.img} alt="" onClick={()=> toggleModal()} />        
      </div>
      <div className='modal-handler off' ref={modalRef}>
        <Modal item={item} toggleModal={toggleModal} />
      </div>

    </>
  )
}

export default Item
/*
  */