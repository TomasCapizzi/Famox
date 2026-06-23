import {useRef} from 'react'

import useLongitudPanel from 'hooks/ecommerce/unidadSuministro/useLongitudPanel';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import { useTranslation } from 'react-i18next';

function LongitudPanel({setLongitudPanel, longitudPanel, handlerInput, setHandlerInput}){

      // Panel de cabecera - Longitud:
  const medidasRef = useRef();
  const opcionesRef = useRef();
  const longitudRef = useRef();
  const {longitudPanelCabecera, controlarUnidadMedida, resetValores} = useLongitudPanel(medidasRef, setLongitudPanel, setHandlerInput)
  const {mostrarLongitudPanel} = useMostrarOpciones();
  const {t} = useTranslation();
      
  function confirmarItems(){
    resetValores(longitudRef);
    //setOpcionesHandler(!opcionesHandler);
    mostrarLongitudPanel(opcionesRef);
  }

    return (
      <div className='longitud-panel'>
        <EncabezadoOpciones titulo={t("ecomm.categorias.h")} mostrarOpcion={()=> mostrarLongitudPanel(opcionesRef)} opcionesRef={opcionesRef}/>
        <article className='opciones' ref={opcionesRef}>
          <input type="number" name='longitud' ref={longitudRef} min={0} onChange={(e)=> longitudPanelCabecera(e)} disabled={handlerInput} />
            <select name="medidas" id="" ref={medidasRef} onChange={()=> controlarUnidadMedida()} >
              <option value="default">{t("ecomm.steps.d.title")}</option>
              <option value="mm">{t("ecomm.steps.d.val1")}</option>
              <option value="cm">{t("ecomm.steps.d.val2")}</option>
              <option value="mts">{t("ecomm.steps.d.val3")}</option>
            </select>
            <button onClick={()=> confirmarItems()}>{t("ecomm.steps.o")}</button>
        </article>
      </div>
  
    )
  }

export default LongitudPanel