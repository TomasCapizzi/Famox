import BajaTension from './BajaTension';
import Botonera from '../Botonera'
import Iluminacion from './Iluminacion';
import MediaTension from './MediaTension';
import React from 'react'
import {TiDelete} from 'react-icons/ti';
import useAgregarCarrito from '../../../../../../hooks/ecommerce/useAgregarCarrito'

function EleccionUnidSum({item,toggleModal }) {

    const {agregarAlCarrito} = useAgregarCarrito({item})



  return (
    <div className='modal-eleccion'>
        <div className='container' >
            {
                item.mediaTension ? <MediaTension items={item.mediaTension} /> : null
            }
            {
              item.bajaTension ? <BajaTension items={item.bajaTension} /> : null
            }{
              item.iluminacion ? <Iluminacion items={item.iluminacion} /> : null
            }

        </div>
    </div>
  )
}

export default EleccionUnidSum;