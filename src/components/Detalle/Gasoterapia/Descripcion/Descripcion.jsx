import React from 'react';

function Descripcion({product}) {

  return (
    <div className='uso'>
        <div>
            <h4>Uso Previsto</h4>
            <p>{product.uso}</p>
        </div>
        {
            product.rango !== undefined &&         
            <div>
                <h4>Rango de uso</h4>
                <p>{product.rango}</p>
            </div>
        }
        {
            product.anmat ?
                <div>
                    <h4>A.N.M.A.T</h4>
                    <p>Considerado Producto Médico por el organismo.</p>
                </div>
            : null
        }
    </div>
  )
}

export default Descripcion;
