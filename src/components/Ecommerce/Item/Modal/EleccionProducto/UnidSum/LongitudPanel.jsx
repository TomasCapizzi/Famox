import React, {useRef} from 'react'

function LongitudPanel({setLongitudPanel, longitudPanel, handlerInput, setHandlerInput}){

      // Panel de cabecera - Longitud:
      const medidasRef = useRef();    

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