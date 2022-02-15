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
    <form action="" onSubmit={(e)=> enviarConsulta(e)} >

    <label htmlFor="">Nombre</label>
    <input type="text" id='nombre' />

    <label htmlFor="">Correo Electrónico</label>
    <input type="email"  id='mail' />

    <label htmlFor="">Asunto</label>
    <input type="text"  id='asunto' />

    <label htmlFor="">Mensaje</label>
    <textarea name="" id="mensaje"></textarea>

    <input type="submit" value='Enviar' className='submit' />

    </form>
  )
}

export default Form