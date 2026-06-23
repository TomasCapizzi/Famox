import CarritoItemAcc from './CarritoItemAcc';
import CarritoItemGas from './CarritoItemGas';
import CarritoItemUS from './CarritoItemUS';
import React from 'react';
import TablaHead from './TablaHead';

function Tabla({carro}) {
  return (
    <table>
        <TablaHead/>
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