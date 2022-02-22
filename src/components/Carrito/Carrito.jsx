import React, {useContext, useRef, useState} from 'react';

import {CarritoContext} from '../../store/carritoContext';
import CarritoIem from './CarritoItem';
import FormularioCotizacion from './FormularioCotizacion';

function Carrito() {

    const {carro} = useContext(CarritoContext);
    const [formHandler, setFormHandler] = useState(false)
    const formRef = useRef();

    function habilitarForm(){
        setFormHandler(!formHandler);
        formRef.current.classList.toggle('off')
    }

    function pedirCotizacion(e){
        e.preventDefault()
    }
  return (
    <section className='carrito'>
        <h1>Carrito</h1>
        <div className='carrito-container'>
            {
                carro.length === 0 ?
                <p>Tu carrito esta vacio ...</p>
                : 
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Artículo</th>
                                <th>Cantidad</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                carro.length >= 1 &&
                                    carro.map(
                                        item => <CarritoIem item={item} key={item._id} />
                                    )
                            }                    
                        </tbody>   
                    </table>
                    {formHandler ? null : <button onClick={habilitarForm}>Pedir Cotización</button> }
                    
                </>
                
            }
            <FormularioCotizacion pedirCotizacion={pedirCotizacion} habilitarForm={habilitarForm}  formRef={formRef} />
        </div>  
    </section>
  )
}

export default Carrito