import React, {useState} from 'react'

import BajaTension from './Opciones/BajaTension/BajaTension';
import Botonera from '../Botonera'
import ContainerSelecciones from './Selecciones/ContainerSelecciones';
import GasConector from './Opciones/ConexionGases/GasConector';
import Iluminacion from './Opciones/Iluminacion/Iluminacion';
import LongitudPanel from './Opciones/LongitudPanel/LongitudPanel';
import MediaTension from './Opciones/MediaTension/MediaTension';
import useAgregarCarrito from 'hooks/ecommerce/useAgregarCarrito';

function EleccionUnidSum({item}) {

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
      setLongitudPanel,
      eliminarItem
      } = useAgregarCarrito({item})   

    const [handlerInput, setHandlerInput] = useState(true)

    function borrarSelecciones(){
      setConexiones([]);
      setValoresBajaTension([]);
      setValoresMediaTension([]);
      setValoresIluminacion([]);
      setLongitudPanel();
    }
    
    
  return (
    <div className='eleccion-producto'>
        <div className='container-unidsum' >
          <div className='container-opciones'>
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
              item.longitud && <LongitudPanel setLongitudPanel={setLongitudPanel} longitudPanel={longitudPanel} handlerInput={handlerInput} setHandlerInput={setHandlerInput} />
            }
          </div>
          <div className='container-seleccion'>
            <ContainerSelecciones conexiones={conexiones} eliminarItem={eliminarItem} valoresBajaTension={valoresBajaTension} valoresIluminacion={valoresIluminacion} valoresMediaTension={valoresMediaTension} longitudPanel={longitudPanel}/>
            {
              // HABILITACION DE BOTONERA
              (item.nombre === 'Panel de Cabecera') ?
                ((valoresMediaTension.length > 0 || valoresBajaTension.length > 0 || valoresIluminacion.length > 0) && longitudPanel && (conexiones.length>0)) ? <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/> : <p>Seleccionar características y longitud</p>
              : (item.nombre === 'Panel de Gases') ? ((conexiones.length > 0) && longitudPanel) ? <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/> : <p>Seleccionar conexiones</p>
              : (item.nombre === 'Miniducto') ? ((conexiones.length > 0) && longitudPanel) ? <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/> : <p>Seleccionar conexiones</p>
              :
                ((valoresMediaTension.length > 0 || valoresBajaTension.length > 0 || valoresIluminacion.length > 0)&& conexiones.length > 0) ?
                  <Botonera agregarAlCarrito={agregarAlCarrito}  borrarSelecciones={borrarSelecciones}/>
                : null
            }
          </div>
        </div>
    </div>
  )
}

export default EleccionUnidSum;