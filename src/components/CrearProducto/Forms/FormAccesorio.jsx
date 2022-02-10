import React from 'react';

function FormAccesorio({setHandler}) {

  function validarForm(e){
    
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const descripcion = e.target.descripcion.value;
    const img = e.target.img.value;

    const producto = {
      nombre,
      descripcion,
      img,
    }
    console.log(producto);
    crearProducto(producto)
  }

  function crearProducto(producto){
    fetch('https://famox-api.herokuapp.com/api/products/accesorios', {
      method: 'POST',
      body: JSON.stringify(producto),
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
      }
    }).then( res => console.log(res))

    setHandler(false);
  }


  return(
    <section className='form-accesorio-container'>
      <h3>Formulario Accesorio</h3>
      <form action="" onSubmit={(e)=> validarForm(e)}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id='nombre' required />

          <label htmlFor="descripcion">Descripción</label>
          <textarea name="" id="descripcion" cols="20" rows="5" required></textarea>
          
          <label htmlFor="img">Imagen (ruta)</label>
          <input type="text" id='img' />

          <input type="submit" value='Enviar' className='form-submit' />
      </form>
    </section>
  )
}

export default FormAccesorio;
