import React, {useContext, useRef, useState} from 'react';

import {CarritoContext} from 'store/carritoContext';
import CarritoLleno from 'components/Carrito/CarritoLleno';
import CarritoVacio from 'components/Carrito/CarritoVacio';
import FormularioCotizacion from 'components/Carrito/FormularioCotizacion';
import {Helmet} from 'react-helmet';
import {useNavigate} from 'react-router-dom';

function Carrito() {

    const {carro, borrarCarrito} = useContext(CarritoContext);
    const [formHandler, setFormHandler] = useState(false)
    const formRef = useRef();
    const navigate = useNavigate();// Funcion nueva del react router para redireccionar
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
        fetch('https://famox-api.vercel.app/formulario/venta', request);
        borrarCarrito();
        setTimeout(()=>{
            navigate('/checkout'); // Redirección al checkout y borrado del carrito previamente
        },1000)
    }
  return (
    <section className='carrito'>
        <Helmet>
            <title>Carrito</title>
            <meta name="description" content="Podrás visualizar los productos que hayas seleccionado en nuestro Ecommerce. Una vez tengas todo seleccionado, te enviaremos la cotización correspondiente." />
        </Helmet>
        <h1>Carrito</h1>
        <div className='carrito-container'>
            {
                carro.length === 0 ? <CarritoVacio/>
                : <CarritoLleno carro={carro} formHandler={formHandler} habilitarForm={habilitarForm} />               
            }
            {carro.length ? 
                <>
                    <h3>Realiza tu Pedido</h3>
                    <FormularioCotizacion pedirCotizacion={pedirCotizacion} habilitarForm={habilitarForm}  formRef={formRef} />
                </>
                : null}
        </div>  
    </section>
  )
}

export default Carrito