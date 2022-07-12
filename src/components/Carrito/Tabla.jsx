import CarritoItem from './CarritoItem';
import CarritoItem2 from './CarritoItem2';
import React from 'react';

function Tabla({carro}) {
  return (
    <table>
    <thead>
        <tr>
            <th>Artículo</th>
            <th>Detalles</th>
            <th>Código</th>
            <th>Cantidad</th>
            <th>Borrar</th>
        </tr>
    </thead>
    <tbody>
        { 
            carro.length >= 1 &&
                carro.map(
                    item => item.conector || item.gas || item.modelo ? <CarritoItem item={item} key={item._id} /> : <CarritoItem2 item={item} key={item._id} />
                )
        }                    
    </tbody>   
</table>
  )
}

export default Tabla