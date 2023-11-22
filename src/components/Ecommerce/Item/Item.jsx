import React,{useRef} from 'react';

import Modal from './Modal/Modal';

function Item({item}) {

  const modalRef = useRef()

  function toggleModal(e,containerModalRef, modalWinwowRef){
    console.log('modal'); 
  }

  return (
    <div className='item-ecom'>
      <div className='item-info'>
        <h5>{item.nombre}</h5>
        <img src={item.img} alt={item.nombre} onClick={()=> toggleModal()} />        
      </div>
      <Modal item={item} toggleModal={toggleModal} />
    </div>
  )
}

export default Item;