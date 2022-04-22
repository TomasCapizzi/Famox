import React, {useRef, useState} from 'react'

import BajaTension from './BajaTension';
import Botonera from '../Botonera'
import Conexiones from './Conexiones';
import GasConector from './GasConector';
import Iluminacion from './Iluminacion';
import MediaTension from './MediaTension';
import Selecciones from './Selecciones';
import useAgregarCarrito from '../../../../../../hooks/ecommerce/useAgregarCarrito';

function EleccionUnidSum({item,toggleModal }) {

    const {
      agregarAlCarrito,
      valoresMediaTension,
      valoresBajaTension,
      valoresIluminacion,
      conexiones,
      longitudPanel,
      setValoresMediaTension,
      setValoresBajaTension,
      setValoresIluminacion,
      setConexiones,
      setLongitudPanel
      } = useAgregarCarrito({item})
      

    const [handlerInput, setHandlerInput] = useState(true)

    // Panel de cabecera - Longitud:
    const medidasRef = useRef();
    

    function eliminarItem(item){
      const itemMediaTension = valoresMediaTension.find(
        valor=> valor === item
      );
      const itemBajaTension = valoresBajaTension.find(
        valor=> valor === item
      );
      const itemIluminacion = valoresIluminacion.find(
        valor=> valor === item
      );
      const itemConexion = conexiones.find(
        valor => valor === item
      );
      if(itemMediaTension){
        setValoresMediaTension(valoresMediaTension.filter(
          valor => valor !== item
        ))
      } else if(itemBajaTension){
        setValoresBajaTension(valoresBajaTension.filter(
          valor => valor !== item
        ))
      } else if(itemIluminacion){
        setValoresIluminacion(valoresIluminacion.filter(
          valor => valor !== item
        ))
      } else if(itemConexion){
        setConexiones(conexiones.filter(
          valor => valor !== item
        ))
      }
    }

    function longitudPanelCabecera(e){
      if(medidasRef.current.value !== 'default'){
        setLongitudPanel(`${e.target.value} ${medidasRef.current.value}`)
      }      
    }
    function controlarUnidadMedida(){
      if(medidasRef.current.value === 'default'){
        setHandlerInput(true)
      } else {
        setHandlerInput(false)
      }
    }

  return (
    <div className='modal-eleccion'>
        <div className='container' >
          { // Elección de Gases y Conectores
            item.gases && item.conectores &&
            <GasConector item={item} conexiones={conexiones} setConexiones={setConexiones} />
          }
          { // Todos los productos menos el Panel de Cabecera y el Panel de Gases
              item.mediaTension ? 
              <MediaTension 
                items={item.mediaTension} 
                valoresMediaTension={valoresMediaTension} 
                setValoresMediaTension={setValoresMediaTension}
                /> : null
          }
          {
            item.bajaTension ? 
              <BajaTension 
              items={item.bajaTension} 
              valoresBajaTension={valoresBajaTension} 
              setValoresBajaTension={setValoresBajaTension}
              /> : null
          }{
            item.iluminacion ? 
              <Iluminacion 
              items={item.iluminacion} 
              valoresIluminacion={valoresIluminacion} 
              setValoresIluminacion={setValoresIluminacion}
              /> : null
          }

          { // Panel de Cabecera
            item.nombre === 'Panel de Cabecera' && PanelLongitud(medidasRef,longitudPanelCabecera, controlarUnidadMedida, longitudPanel, handlerInput)
          }


            {///////////////////////////// SELECCIONES ////////////////////////////////////
            }
            <div className='selecciones-container'>
              {
                conexiones.length >= 1 ?
                <>
                  <p>Conexiones</p>
                  <table className='seleccion-conex'>
                    <thead>
                      <tr>
                        <th>Conector</th>
                        <th>Gas</th>
                        <th>Cantidad</th>
                        <th>Borrar</th>
                      </tr>
                    </thead>
                    <Conexiones conexiones={conexiones} eliminarItem={eliminarItem} />
                  </table>
                </>

                : null
              }
              {
                valoresMediaTension.length >= 1 ?
                <>
                  <p>Media Tension</p>
                  <table className='seleccion'>
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Borrar</th>
                      </tr>
                    </thead>
                    <Selecciones valores={valoresMediaTension} eliminarItem={eliminarItem} />
                  </table>
                </>

                  : null
              }
              {
                valoresBajaTension.length >= 1 ?
                <>
                  <p>Baja Tension</p>
                  <table className='seleccion'>                    
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Borrar</th>
                      </tr>
                    </thead>
                    <Selecciones valores={valoresBajaTension} eliminarItem={eliminarItem} />
                  </table>
                </>
                  : null
              }
              {
                valoresIluminacion.length >= 1 ?
                <>
                  <p>Iluminación</p>
                  <table className='seleccion'>
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Borrar</th>
                      </tr>
                    </thead>
                    <Selecciones valores={valoresIluminacion} eliminarItem={eliminarItem} />
                  </table>
                </>
                
                  : null
              }
            </div>
        </div>
        {
              // HABILITACION DE BOTONERA
              (item.nombre === 'Panel de Cabecera') ?
                ((valoresMediaTension.length > 0 || valoresBajaTension.length > 0 || valoresIluminacion.length > 0) && longitudPanel && (conexiones.length>0) ) ? <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} /> : <p>Seleccionar características y longitud</p>
              : (item.nombre === 'Panel de Gases') ? (conexiones.length > 0) ? <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal= {toggleModal} /> : <p>Seleccionar conexiones</p>
              :
               ((valoresMediaTension.length > 0 || valoresBajaTension.length > 0 || valoresIluminacion.length > 0)&& conexiones.length > 0) ?
                  <Botonera agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal}/>
                : null
            }
    </div>
  )
}

function PanelLongitud(medidasRef,longitudPanelCabecera, controlarUnidadMedida, longitudPanel, handlerInput){
  return (
    <div className='longitud-panel'>
      <p>Longitud de Panel</p>
      <div>
        <input type="number" min={0} onChange={(e)=> longitudPanelCabecera(e)} disabled={handlerInput} />
        <select name="medidas" id="" ref={medidasRef} onChange={()=> controlarUnidadMedida()} >
          <option value="default">Elegir unidad de medida</option>
          <option value="mm">mm</option>
          <option value="cm">cm</option>
          <option value="mts">mts</option>
        </select>
      </div>
      {
        longitudPanel ? <p>{`${longitudPanel}`}</p> : <p>Selecciona una unidad de medida. Longitud mínima 600mm / 60cm</p>
      }
    </div>

  )
}


export default EleccionUnidSum;