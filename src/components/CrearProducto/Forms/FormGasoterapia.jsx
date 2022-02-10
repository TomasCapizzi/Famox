import React from 'react';

function FormGasoterapia({setHandler}) {

  function validarForm(e){
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const uso = e.target.uso.value;
    const rango = e.target.rango.value;
    const anmat = e.target.anmat.value;
    const manual = e.target.manual.value;
    const img = e.target.img.value;
    const gases = {
      oxigeno: e.target.oxigeno.checked,
      aire:e.target.aire.checked,
      n20: e.target.n2o.checked,
      n2: e.target.n2.checked,
      co2: e.target.co2.checked,
      vacio: e.target.vacio.checked,
      oxigeno_aire: e.target.oxigenoaire.checked,
    };
    const conector = {
      diss: e.target.diss.checked,
      afnor:e.target.afnor.checked,
      ss_aga:e.target.ssaga.checked,
      ohmeda:e.target.ohmeda.checked,
      on:e.target.on.checked,
      iram:e.target.iram.checked,
      yugo:e.target.yugo.checked,
    }

    const producto = {
      nombre,
      uso,
      rango,
      anmat,
      manual,
      img,
      gases,
      conector
    }

    console.log(producto);
    crearProducto(producto)
  }

  function crearProducto(producto){
    fetch('https://famox-api.herokuapp.com/api/products/gasoterapia', {
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
    <section className='form-gasoterapia-container'>
      <h3>Formulario Gasoterapia</h3>
      <form action="" onSubmit={(e)=> validarForm(e)}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id='nombre' required />

          <label htmlFor="uso">Uso</label>
          <textarea name="" id="uso" cols="20" rows="5" required></textarea>

          <label htmlFor="rango">Rango</label>
          <textarea name="" id="rango" cols="20" rows="5"></textarea>
          
          <div className='form-anmat'>
            <input type="radio" id='anmat' value='true'/>
            <label htmlFor="anmat">ANMAT</label>
          </div>


          <label htmlFor="manual">Manual (ruta)</label>
          <input type="text" id='manual' />

          <label htmlFor="img">Imagen (ruta)</label>
          <input type="text" id='img' />

          <div className='form-gases'>
            <p>Gases</p>
            <div>
              <input type="checkbox" id='oxigeno' value='true'/>
              <label htmlFor="oxigeno">Oxigeno</label>

              <input type="checkbox" id='aire' value='true'/>
              <label htmlFor="aire">Aire</label>

              <input type="checkbox" id='n2o' value='true'/>
              <label htmlFor="n2o">N2O</label>

              <input type="checkbox" id='n2' value='true'/>
              <label htmlFor="n2">N2</label>

              <input type="checkbox" id='co2' value='true'/>
              <label htmlFor="co2">CO2</label>

              <input type="checkbox" id='vacio' value='true'/>
              <label htmlFor="vacio">VACIO</label>

              <input type="checkbox" id='oxigenoaire' value='true'/>
              <label htmlFor="oxigeno/aire">Oxigeno/Aire</label>
            </div>
          </div>

          <div className='form-conectores'>
            <p>Conectores</p>
            <div>
              <input type="checkbox" id='diss' value='true'/>
              <label htmlFor="diss">Diss</label>

              <input type="checkbox" id='afnor' value='true'/>
              <label htmlFor="afnor">Afnor</label>

              <input type="checkbox" id='ssaga' value='true'/>
              <label htmlFor="ss-aga">SS-AGA</label>

              <input type="checkbox" id='ohmeda' value='true'/>
              <label htmlFor="ohmeda">Ohmeda</label>

              <input type="checkbox" id='on' value='true'/>
              <label htmlFor="on">ON</label>

              <input type="checkbox" id='iram' value='true'/>
              <label htmlFor="iram">Iram</label>

              <input type="checkbox" id='yugo' value='true'/>
              <label htmlFor="yugo">Yugo</label>
            </div>
          </div>
          <input type="submit" value='Enviar' className='form-submit' />
      </form>
    </section>
  )
}

export default FormGasoterapia;
