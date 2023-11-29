import React, {useRef} from 'react'

import useLongitudPanel from 'hooks/ecommerce/unidadSuministro/useLongitudPanel';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';

function LongitudPanel({setLongitudPanel, longitudPanel, handlerInput, setHandlerInput}){

      // Panel de cabecera - Longitud:
  const medidasRef = useRef();
  const opcionesRef = useRef();
  const longitudRef = useRef();
  const {longitudPanelCabecera, controlarUnidadMedida, resetValores} = useLongitudPanel(medidasRef, setLongitudPanel, setHandlerInput)
  const {mostrarLongitudPanel} = useMostrarOpciones();
      
  function confirmarItems(){
    resetValores(longitudRef);
    //setOpcionesHandler(!opcionesHandler);
    mostrarLongitudPanel(opcionesRef);
  }

    return (
      <div className='longitud-panel'>
        <EncabezadoOpciones titulo="Longitud de Panel" mostrarOpcion={()=> mostrarLongitudPanel(opcionesRef)} opcionesRef={opcionesRef}/>
        <article className='opciones' ref={opcionesRef}>
          <input type="number" name='longitud' ref={longitudRef} min={0} onChange={(e)=> longitudPanelCabecera(e)} disabled={handlerInput} />
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