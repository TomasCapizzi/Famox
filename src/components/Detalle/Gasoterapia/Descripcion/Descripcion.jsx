import React from 'react';
import Gases from './Gases';

function Descripcion({product}) {

  return (
    <div className='uso'>
        <div className='descripcion'>
            <h2>Uso Previsto</h2>
            <p>{product.uso}</p>
        </div>
        {
            (product.rango !== null ) &&         
            <div className='rango'>
                <h2>Rango de uso</h2>
                <p>{product.rango}</p>
            </div>
        }
        {
            product.gas && <Gases product={product.gases_} />
        }
        {
            product.anmat ?
                <div className='anmat'>
                    <p>Considerado Producto Médico por ANMAT</p>
                </div>
            : null
        }
    </div>
  )
}

export default Descripcion;
