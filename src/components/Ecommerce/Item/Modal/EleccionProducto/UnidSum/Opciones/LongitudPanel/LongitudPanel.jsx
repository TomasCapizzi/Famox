import React, {useRef} from 'react'

import useLongitudPanel from 'hooks/ecommerce/unidadSuministro/useLongitudPanel';

function LongitudPanel({setLongitudPanel, longitudPanel, handlerInput, setHandlerInput}){

      // Panel de cabecera - Longitud:
  const medidasRef = useRef();
  const {longitudPanelCabecera, controlarUnidadMedida} = useLongitudPanel(medidasRef, setLongitudPanel, setHandlerInput)
      
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

export default LongitudPanel