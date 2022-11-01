import {CONECTORES, GASES} from '../../../data/conexiones';

import BAJATENSION from '../../../data/bajaTension';
import ILUMINACION from '../../../data/iluminacion';
import MEDIATENSION from '../../../data/mediaTension';
import React from 'react';

function FormUnidadSuministro({setHandler}) {
  console.log(GASES, CONECTORES);

  function validarForm(e){
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const uso = e.target.uso.value;
    const anmat = e.target.anmat.checked;
    const img = e.target.img.value;
    const bajaTension = e.target.bajaTension.checked ? BAJATENSION : null;
    const mediaTension = e.target.mediaTension.checked ? MEDIATENSION : null;
    const gases = e.target.conexiones.checked ? GASES : null;
    const conectores = e.target.conexiones.checked ? CONECTORES : null;
    const iluminacion = e.target.iluminacion.checked ? ILUMINACION : null

    const producto = {
      nombre,
      uso,
      anmat,
      img,
      bajaTension,
      mediaTension,
      iluminacion,
      conectores,
      gases
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

    setHandler(false);
  }


  return(
    <section className='form-unidSum-container'>
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

          <label htmlFor="">Baja Tensión</label>
          <input type="radio" id='bajaTension' />

          <label htmlFor="">Media Tensión</label>
          <input type="radio" id='mediaTension' />

          <label htmlFor="">Iluminación</label>
          <input type="radio" id='iluminacion' />

          <label htmlFor="">Conexiones</label>
          <input type="radio" id='conexiones' />



          <input type="submit" value='Enviar' className='form-submit' />
      </form>
    </section>
  )
}

export default FormUnidadSuministro;
