import React, {useContext} from 'react';

import {CarritoContext} from '../../store/carritoContext';
import CarritoIem from './CarritoItem';

function Carrito() {

    const {carro} = useContext(CarritoContext);
  return (
    <section className='carrito'>
        <h1>Carrito</h1>
        <div className='carrito-container}'>
        { 
            carro.length >= 1 ?
                carro.map(
                    item => <CarritoIem item={item} key={item._id} />
                )

            : <p>Tu carrito esta vacio</p>
        }
        </div>  
    </section>
  )
}

export default Carrito