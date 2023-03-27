import CarritoItemAcc from './CarritoItemAcc';
import CarritoItemGas from './CarritoItemGas';
import CarritoItemUS from './CarritoItemUS';
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
                        item => item.conector || item.gas || item.modelo ? <CarritoItemGas item={item} key={item._id} /> : item.accesorio ? <CarritoItemAcc item={item} key={item._id} /> : <CarritoItemUS item={item} key={item._id} />
                    )
            }                    
        </tbody>   
</table>
  )
}

export default Tabla