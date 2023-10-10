import useNotificacion from 'hooks/ecommerce/useNotificacion';
import Item from './Item';
import React from 'react';

function Modelos({item, setModelo, refNoti}) {

  const {activarNoti} = useNotificacion();
  function seleccionarElemento(id){
    setModelo(id);
    activarNoti(refNoti);
  }

  return (
    <article className='modal-modelos-container'>
        <h3>Modelos</h3>
        <table className='contenedor'>
          <thead>
            <tr className='table-head'>
              <th>Imagen</th>
              <th>Código</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {
              item.modelos_.map(
                  modelo => <Item key={modelo._id} modelo={modelo} seleccionarElemento={seleccionarElemento} refNoti={refNoti}/>
              )            
            }
          </tbody>
        </table>
    </article>
  )
}

export default Modelos
