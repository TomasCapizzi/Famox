import React, {useState} from 'react'

import BajaTension from './Opciones/BajaTension';
import Botonera from '../Botonera'
import ContainerSelecciones from './Selecciones/ContainerSelecciones';
import GasConector from './Opciones/GasConector';
import Iluminacion from './Opciones/Iluminacion';
import LongitudPanel from './LongitudPanel';
import MediaTension from './Opciones/MediaTension';
import useAgregarCarrito from 'hooks/ecommerce/useAgregarCarrito';

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
            item.nombre === 'Panel de Cabecera' && <LongitudPanel setLongitudPanel={setLongitudPanel} longitudPanel={longitudPanel} handlerInput={handlerInput} setHandlerInput={setHandlerInput} />
          }
          <ContainerSelecciones conexiones={conexiones} eliminarItem={eliminarItem} valoresBajaTension={valoresBajaTension} valoresIluminacion={valoresIluminacion} valoresMediaTension={valoresMediaTension} />
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




export default EleccionUnidSum;