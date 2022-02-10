import React from 'react';

function Descripcion({product}) {
  return (
    <div className='uso'>
        <div>
            <h4>Uso Previsto</h4>
            <p>{product.uso}</p>
        </div>
        {
            product.rango !== '' &&         
            <div>
                <h4>Rango de uso</h4>
                <p>{product.rango}</p>
            </div>
        }

        <div>
            <h4>A.N.M.A.T</h4>
            <p>
                {product.anmat ? 'Considerado Producto Médico por el organismo.' : 'Este equipo no es considerado Producto Médico por el organismo.'}
            </p>
        </div>
    </div>
  )
}

export default Descripcion;
