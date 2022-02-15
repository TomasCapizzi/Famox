import React from 'react';

function FormModelo({setHandler}) {

  function validarForm(e){
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const uso = e.target.uso.value;
    const rango = e.target.rango.value;
    const img = e.target.img.value;
    const origen = e.target.origen.value;

    const modelo = {
      nombre,
      uso,
      rango,
      img,
      origen
    }

    crearProducto(modelo)
  }

  function crearProducto(modelo){
    fetch('https://famox-api.herokuapp.com/api/products/modelos', {
      method: 'POST',
      body: JSON.stringify(modelo),
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
      }
    }).then( res => console.log(res))

    setHandler(false);
  }
  return(
    <section className='form-modelo-container'>
      <h3>Formulario Modelo</h3>
      <form action="" onSubmit={(e)=> validarForm(e)} >
          <label htmlFor="">Nombre</label>
          <input type="text" id='nombre' required />

          <label htmlFor="">Uso</label>
          <textarea name="" id="uso" cols="20" rows="5" required></textarea>

          <label htmlFor="">Rango</label>
          <textarea name="" id="rango" cols="20" rows="5" required></textarea>

          <label htmlFor="">Imagen (ruta)</label>
          <input type="text" id='img' />

          <label htmlFor="">Origen</label>
          <select name="" id="origen" required>
            <option value="mezclador">Mezclador</option>
            <option value="recipiente_colector">Recipiente Colector</option>
          </select>

          <input type="submit" value='Enviar' className='form-submit' />
      </form>
    </section>
  )
}

export default FormModelo;
