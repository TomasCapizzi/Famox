import React, {useRef} from 'react'

import useLongitudPanel from 'hooks/ecommerce/unidadSuministro/useLongitudPanel';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';

function LongitudPanel({setLongitudPanel, longitudPanel, handlerInput, setHandlerInput}){

      // Panel de cabecera - Longitud:
  const medidasRef = useRef();
  const opcionesRef = useRef();
  const {longitudPanelCabecera, controlarUnidadMedida} = useLongitudPanel(medidasRef, setLongitudPanel, setHandlerInput)
  const {mostrarLongitudPanel, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
      
  function confirmarItems(){
    setOpcionesHandler(!opcionesHandler)
    mostrarLongitudPanel(opcionesRef);
  }

    return (
      <div className='longitud-panel'> {/*COPIAR CLASE OPCIONES DE OTRO ARCHIVO DE ESTILOS DENTRO DE LONGITUD-PANEL PARA COPIAR FUNCIONAMIENTO DE ENCABEZADO*/}
        <EncabezadoOpciones titulo="Longitud de Panel" mostrarOpcion={mostrarLongitudPanel} opcionesRef={opcionesRef}/>
        <article className='opciones' ref={opcionesRef}>
          <input type="number" name='longitud' min={0} onChange={(e)=> longitudPanelCabecera(e)} disabled={handlerInput} />
            <select name="medidas" id="" ref={medidasRef} onChange={()=> controlarUnidadMedida()} >
              <option value="default">Elegir unidad de medida</option>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="mts">mts</option>
            </select>
            <button onClick={()=> confirmarItems()}>Confirmar</button>
        </article>
      </div>
  
    )
  }

export default LongitudPanel