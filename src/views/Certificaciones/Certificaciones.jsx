import React from 'react'

function Certificaciones() {
  return (
    <section className='certificaciones'>
        <h1>Certificaciones</h1>
        <div className='seccion1'>
            <img src="img/certif.jpg" alt="Certificaciones" />
            <div> 
                <h2>Política de Calidad</h2>
                <p>En <b>Famox S.A.</b> nos proponemos dar respuesta a las necesidades de nuestros clientes, mediante el aporte de soluciones de <b>Calidad</b>, focalizados en la <b>Innovación</b>, el <b>Desarrollo</b> y el <b>Servicio</b>.
                Para todo ello, tenemos que conocer cuáles son esas necesidades y expectativas, aplicar la Mejora Continua y capacitar a nuestro personal, para lograr a través de su participación, su compromiso con el Sistema de Gestión de Calidad.</p>
            </div>
        </div>
        <div className='seccion2'>
            <h2>Certificado ISO 9001:2015</h2>
            <p>Contamos con un sistema de gestión de calidad certificado bajo los línemientos de ISO 9001:2015.
            Esta norma internacional especifica los requisitos para un sistema de gestión de la calidad que puedan utilizarse para su aplicación interna por las organizaciones, para certificación o con fines contractuales.
            Se centra en la eficacia del sistema de gestión de la calidad para dar cumplimiento a los requisitos del cliente.</p>
        </div>
        <div className='seccion3'>
            <h2>Certificado ISO 13485:2016</h2>
            <p>Contamos con un sistema de gestión de calidad certificado bajo los líneamientos de ISO 13485:2016.
            Esta norma internacional especifica los requisitos de un sistema de gestión de la calidad cuando una organización precisa demostrar su capacidad de proporcionar productos sanitarios y servicios relacionados que cumplen de forma coherente requisitos del cliente y requisitos reglamentarios aplicables a los productos sanitarios y a los servicios relacionados.</p>
        </div>
        <div className='seccion4'>
            <h2>Certificado A.N.M.A.T.</h2>
            <p>Famox S.A. cuenta con sus correspondientes certificados que la acreditan como <b>“Empresa fabricante de Productos Médicos”</b> y de cumplimiento de <b>“Buenas Prácticas de Fabricación” (BPF)</b>. Las BPF establecen los requisitos aplicables a la fabricación de productos médicos. Estos requisitos describen las buenas prácticas de fabricación para métodos y controles utilizados en el diseño, compra fabricación, embalado, rotulado, almacenamiento, instalación y asistencia técnica de todos los productos médicos. Los requisitos de esta norma están dirigidos a asegurar que los productos sean seguros y eficaces.</p>
        </div>
    </section>
  )
}

export default Certificaciones