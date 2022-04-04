import React, {useRef, useState} from 'react';

import {TiDelete} from 'react-icons/ti';

function FormGasoterapia({setHandler}) {

  const [gases_, setGases_] = useState([]);
  const [conectores, setConectores] = useState([]);
  const [rangos, setRangos] = useState([]);
  const [handlerRango, setHandlerRango] = useState(false);
  const [modelos, setModelos] = useState([]);
  const [handlerModelo, setHandlerModelos] = useState(false);

  const modeloNombreRef = useRef();
  const modeloImgRef = useRef();
  const modeloUsoRef = useRef();
  const modeloRangoRef = useRef();

  const rangoNombreRef = useRef();


  function validarForm(e){
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const uso = e.target.uso.value;
    const rango = e.target.rango.value;
    const anmat = e.target.anmat.value;
    const manual = e.target.manual.value;
    const img = e.target.img.value;
    verificarGases(e.target);
    verificarConectores(e.target);
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
      cu:e.target.cu.checked,
      iram:e.target.iram.checked,
      yugo:e.target.yugo.checked,
    }

    const producto = {
      nombre,
      uso,
      rango,
      anmat,
      manual,
      gasoterapia : true,
      gases_,
      conectores,
      modelos,
      rangos,
      img,
      gases,
      conector
    }

    console.log(producto);
    crearProducto(producto)
  }

  function verificarGases(gas){
    if(gas.oxigeno.checked){
      setGases_(...gases_, 'OXÍGENO')
    }
    if(gas.aire.checked){
      setGases_(...gases_, 'AIRE')
    }
    if(gas.n2o.checked){
      setGases_(...gases_, 'N2O')
    }
    if(gas.n2.checked){
      setGases_(...gases_, 'N2')
    }
    if(gas.co2.checked){
      setGases_(...gases_, 'CO2')
    }
    if(gas.vacio.checked){
      setGases_(...gases_, 'VACIO')
    }
    if(gas.oxigenoaire.checked){
      setGases_(...gases_, 'OXÍGENO/AIRE')
    }
  }

  function verificarConectores(conector){
    if(conector.diss.checked){
      setConectores(...conectores, 'DISS')
    }
    if(conector.afnor.checked){
      setConectores(...conectores, 'AFNOR')
    }
    if(conector.ssaga.checked){
      setConectores(...conectores, 'SS/AGA')
    }
    if(conector.ohmeda.checked){
      setConectores(...conectores, 'OHMEDA')
    }
    if(conector.on.checked){
      setConectores(...conectores, 'ON')
    }
    if(conector.cu.checked){
      setConectores(...conectores, 'CU')
    }
    if(conector.iram.checked){
      setConectores(...conectores, 'IRAM')
    }
    if(conector.yugo.checked){
      setConectores(...conectores, 'YUGO')
    }

  }

  function agregarModelo(){
    const nombre = modeloNombreRef.current.value ? modeloNombreRef.current.value : undefined
    const img = modeloImgRef.current.value ? modeloImgRef.current.value : undefined
    const uso = modeloUsoRef.current.value ? modeloUsoRef.current.value :  undefined
    const rango = modeloRangoRef.current.value ? modeloRangoRef.current.value : undefined


    const modelo = {
      _id : Math.random().toString(36).split('.')[1],
      nombre,
      img,
      uso,
      rango,
    }
    console.log(modelo);
    setModelos([...modelos, modelo])
    setHandlerModelos(false)
    console.log(modelos);
  }

  function agregarRango(){
    const nombre = rangoNombreRef.current.value ? rangoNombreRef.current.value : undefined

    const rango = {
      _id: Math.random().toString(36),
      nombre
    }
    console.log(rango);
    setRangos([...rangos, rango]);
    setHandlerRango(false);
  }
  function borrarRango(id){
    const nuevoArray = rangos.filter(
      item => item._id !== id
    )
    setRangos(nuevoArray)
  }
  
  function borrarModelo(id){
    const nuevoArray = modelos.filter(
      item => item._id !== id
    )
    setModelos(nuevoArray)
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

          <div className='form-model'>
            <input type="radio" id='modelos'/>
            <label htmlFor="modelos">Modelos</label>
          </div>

          <label htmlFor="manual">Manual (ruta)</label>
          <input type="text" id='manual' />

          <label htmlFor="img">Imagen (ruta)</label>
          <input type="text" id='img' />

          <div className='form-gases'>
            <p>Gases</p>
            <div>
              <input type="checkbox" id='oxigeno' value='true'/>
              <label htmlFor="oxigeno">OXÍGENO</label>

              <input type="checkbox" id='aire' value='true'/>
              <label htmlFor="aire">AIRE</label>

              <input type="checkbox" id='n2o' value='true'/>
              <label htmlFor="n2o">N2O</label>

              <input type="checkbox" id='n2' value='true'/>
              <label htmlFor="n2">N2</label>

              <input type="checkbox" id='co2' value='true'/>
              <label htmlFor="co2">CO2</label>

              <input type="checkbox" id='vacio' value='true'/>
              <label htmlFor="vacio">VACIO</label>

              <input type="checkbox" id='oxigenoaire' value='true'/>
              <label htmlFor="oxigeno/aire">OXÍGENO/AIRE</label>
            </div>
          </div>

          <div className='form-conectores'>
            <p>Conectores</p>
            <div>
              <input type="checkbox" id='diss' value='true'/>
              <label htmlFor="diss">DISS</label>

              <input type="checkbox" id='afnor' value='true'/>
              <label htmlFor="afnor">AFNOR</label>

              <input type="checkbox" id='ssaga' value='true'/>
              <label htmlFor="ss-aga">SS-AGA</label>

              <input type="checkbox" id='ohmeda' value='true'/>
              <label htmlFor="ohmeda">OHMEDA</label>

              <input type="checkbox" id='on' value='true'/>
              <label htmlFor="on">ON</label>

              <input type="checkbox" id='cu' value='true'/>
              <label htmlFor="cu">CU</label>

              <input type="checkbox" id='iram' value='true'/>
              <label htmlFor="iram">IRAM</label>

              <input type="checkbox" id='yugo' value='true'/>
              <label htmlFor="yugo">YUGO</label>
            </div>
          </div>

          <p className='btn-rango' onClick={()=>setHandlerRango(!handlerRango)}>Agregar Rango</p>
          {
            handlerRango && 
              <div className='form-rangos'>
                <label htmlFor="">Nombre</label>
                <input type="text" id='rangonombre' name='rangonombre' ref={rangoNombreRef} />
                <span onClick={agregarRango}>Agregar</span>
              </div>
          }
          <div className='rangos-selec'>
            {
              rangos.length > 0 && rangos.map(
                item => 
                  <div key={item._id}>
                    <p>{item.nombre}</p>
                    <TiDelete onClick={()=> borrarRango(item._id)}/>
                  </div>
              )
            }
          </div>


          <p className='btn-modelo' onClick={()=> setHandlerModelos(!handlerModelo)}>Agregar Modelo</p>
          {
            handlerModelo && 
              <div className='form-modelos'>
                <label htmlFor="">Nombre</label>
                <input type="text" id='modelnombre' name='modelnombre' ref={modeloNombreRef} />
                <label htmlFor="">Img (ruta)</label>
                <input type="text" id='modelimg' name='modelimg' ref={modeloImgRef} />
                <label htmlFor="">Uso</label>
                <input type="text" id='modeluso' name='modeluso' ref={modeloUsoRef} />
                <label htmlFor="">Rango</label>
                <input type="text" id='modelrango' name='modelrango' ref={modeloRangoRef} />
                <span onClick={agregarModelo}>Agregar</span>
              </div>
          }
          <div className='modelos-selec'>
            {
              modelos.length > 0 && modelos.map(
                item => 
                  <div key={item._id}>
                    <article>
                      <p>{item.nombre}</p>
                      {item.uso !== undefined && <p>{item.uso}</p>}
                      {item.rango !== undefined && <p>{item.rango}</p>}
                    </article>
                    <TiDelete onClick={()=> borrarModelo(item._id)}/>
                  </div>
              )
            }
          </div>
          <input type="submit" value='Enviar' className='form-submit' />
      </form>
    </section>
  )
}

export default FormGasoterapia;
