import React, {useContext, useRef, useState} from 'react';

import {CarritoContext} from 'store/carritoContext';
import CarritoIem from 'components/Carrito/CarritoItem';
import CarritoItem2 from 'components/Carrito/CarritoItem2';
import FormularioCotizacion from 'components/Carrito/FormularioCotizacion';
import {useNavigate} from 'react-router-dom';

function Carrito() {

    const {carro, borrarCarrito} = useContext(CarritoContext);
    const [formHandler, setFormHandler] = useState(false)
    const formRef = useRef();
    const navigate = useNavigate()

    function habilitarForm(){
        setFormHandler(!formHandler);
        formRef.current.classList.toggle('off')
    }

    function pedirCotizacion(e){
        // Enviar mail con los datos del pedido. De esta manera evitamos que se redireccione a la API
        e.preventDefault()
        const pedido = {
            nombre: e.target.nombre.value,
            empresa: e.target.empresa.value,
            email: e.target.mail.value,
            carro
        }
        const request = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido),
        }
        fetch('https://famox-api.herokuapp.com/formulario/venta', request);
        borrarCarrito();
        setTimeout(()=>{
            navigate('/checkout'); // Redirección al checkout y borrado del carrito previamente
        },1000)
    }
  return (
    <section className='carrito'>
        <h1>Carrito</h1>
        <div className='carrito-container'>
            {
                carro.length === 0 ?
                    <section className='carro-vacio'>
                        <h5>Tu carrito esta vacio ...</h5>
                        <p>Dirígete al <span><a href="/ecommerce">Ecommerce</a></span> para poder seleccionar los productos de tu interés y poder pedir una cotización</p>

                    </section>
                : 
                <>
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
                                        item => item.conector || item.gas || item.modelo ? <CarritoIem item={item} key={item._id} /> : <CarritoItem2 item={item} key={item._id} />
                                    )
                            }                    
                        </tbody>   
                    </table>
                    {formHandler ? null : <button onClick={habilitarForm}>Pedir Cotización</button> }
                    
                </>
                
            }
            {carro.length ? <FormularioCotizacion pedirCotizacion={pedirCotizacion} habilitarForm={habilitarForm}  formRef={formRef} />: null}
        </div>  
    </section>
  )
}

export default Carrito