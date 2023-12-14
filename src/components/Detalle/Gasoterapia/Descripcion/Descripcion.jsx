import React from 'react';

function Descripcion({product}) {

  return (
    <div className='uso'>
        <div>
            <h2>Uso Previsto</h2>
            <p>{product.uso}</p>
        </div>
        {
            product.rango !== undefined &&         
            <div>
                <h2>Rango de uso</h2>
                <p>{product.rango}</p>
            </div>
        }
        {
            product.anmat ?
                <div>
                    <h2>A.N.M.A.T</h2>
                    <p>Considerado Producto Médico por el organismo.</p>
                </div>
            : null
        }
    </div>
  )
}

export default Descripcion;
