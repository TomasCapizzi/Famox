import React from 'react';


function Descripcion({product}) {

  return (
    <div className='uso'>
        <div className='descripcion'>
            <h2>Uso Previsto</h2>
            <p>{product.uso}</p>
        </div>
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
