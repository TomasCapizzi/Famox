import {MdKeyboardArrowDown} from 'react-icons/md';
import React from 'react'

function PregFrec() {
    
  return (
    <section className='pregfrec'>
        <h1>Preguntas Frecuentes</h1>
        <article className='seccion'>
            <h4>¿Como funciona nuestro ecommerce?</h4>
            <div className='res'>
                <p>Las compras de nuestros productos no se pueden realizar de forma directa desde la página, nuestro ecommerce es el encargado de llevar a cabo la gestión de lo que el cliente necesita y poder generarle una cotización. Una vez generada esta cotización, la comunicación se traslada al correo electrónico</p>
                <ul>
                <li>1°:  Mirá nuestros productos: Navegá el catálogo y buscá lo que más te gusta, podes refinar tu búsqueda con nuestros filtros de productos.</li>
                <li>2°: Agregá al carrito lo que más te guste: Seleccioná tus productos deseados y agregalos al carrito. Deberás elegir las características correspondientes para cada uno para poder agregarlos*</li>
                <li>3°: Finaliza tu pedido: Una vez que hayas agregado tus productos avanzá al checkout ubicado en el carrito en la parte superior de la página. Completá el formulario con tus datos personales.</li>
                </ul>
            </div>            
        </article>

        <article className='seccion'>
            <h4>¿Puedo seleccionar mismos productos pero con diferentes características?</h4>
            <p>Sí se puede, cada producto seleccionado cuenta con un código (si es del área Gasoterapia) o con distintas posibilidades de armado (si es una Unidad de Suministro). Usted puede agregar al carrito el producto X y luego volver para armar el mismo producto pero con distintas cualidades</p>     
        </article>

        <article className='seccion'>
            <h4>¿Hacen envíos al exterior?</h4>
            <p>Realizamos envíos al exterior, debemos coordinar los gastos de envío y de aranceles aduaneros para cada pedido.</p>           
        </article>

        <article className='seccion'>
            <h4>¿Cuál es el horario de atención al cliente?</h4>
            <p>El horario de Atención al Cliente es de Lunes a Viernes de 8 a 17 hs.</p>
        </article>

        <article className='seccion'>
            <h4>¿Cómo hago para contactarme?</h4>
            <p>Nos puedes contactar a través del correo ventas@famox.com.ar, atencion.cliente@famox.com.ar o por whatsapp al +54 9 11 3427-6306 .</p>         
        </article>

        <article className='seccion'>
            <h4>¿Medios de pago?</h4>
            <p>Nos manejamos con pagos con cheques o transferencia</p>          
        </article>

        <article className='seccion'>
            <h4>¿Cambio de productos?</h4>
            <p></p>
        </article>
    </section>
  )
}

export default PregFrec