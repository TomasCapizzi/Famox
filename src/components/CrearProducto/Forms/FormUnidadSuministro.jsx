import React from 'react';

function FormUnidadSuministro() {

  function validarForm(e){
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const uso = e.target.uso.value;
    const anmat = e.target.anmat.value;
    const img = e.target.img.value;

    const producto = {
      nombre,
      uso,
      anmat,
      img,
    }
    console.log(producto);
    crearProducto(producto)
  }

  function crearProducto(producto){
    fetch('https://famox-api.herokuapp.com/api/products/unidades-suministro', {
      method: 'POST',
      body: JSON.stringify(producto),
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
      }
    }).then( res => console.log(res))
  }


  return(
    <section>
      <h3>Formulario Unidad Suministro</h3>
      <form action="" onSubmit={(e)=>validarForm(e)}>
      <label htmlFor="nombre">Nombre</label>
          <input type="text" id='nombre' required />

          <label htmlFor="uso">Uso</label>
          <textarea name="" id="uso" cols="20" rows="5" required></textarea>

          <div className='form-anmat'>
            <input type="radio" id='anmat' value='true'/>
            <label htmlFor="anmat">ANMAT</label>
          </div>

          <label htmlFor="img">Imagen (ruta)</label>
          <input type="text" id='img' />

          <input type="submit" value='Enviar' className='form-submit' />
      </form>
    </section>
  )
}

export default FormUnidadSuministro;
