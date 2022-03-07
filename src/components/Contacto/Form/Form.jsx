import React from 'react'

function Form() {

    function enviarConsulta(e){
        e.preventDefault();
        const consulta = {
            nombre: e.target.nombre.value,
            correo: e.target.mail.value,
            asunto: e.target.asunto.value,
            mensaje: e.target.mensaje.value
        }

        console.log(consulta);

    }

  return (
    <form action="http://localhost:4000/formulario/contacto" method='POST' onSubmit={(e)=> enviarConsulta(e)} >

    <label htmlFor="">Nombre</label>
    <input type="text" id='nombre' name='nombre' />

    <label htmlFor="">Empresa</label>
    <input type="text" id='empresa' name='empresa' />

    <label htmlFor="">Correo Electrónico</label>
    <input type="email"  id='mail' name='email' />

    <label htmlFor="">Asunto</label>
    <input type="text"  id='asunto' name='asunto' />

    <label htmlFor="">Mensaje</label>
    <textarea name="mensaje" id="mensaje"></textarea>

    <input type="submit" value='Enviar' className='submit' />

    </form>
  )
}

export default Form