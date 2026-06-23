import {useState} from 'react'
import { BAJATENSION_en, BAJATENSION_es, BAJATENSION_pt } from '../../../../../../data/bajaTension';
import { MEDIATENSION_en, MEDIATENSION_es, MEDIATENSION_pt } from '../../../../../../data/mediaTension';
import { ILUMINACION_es, ILUMINACION_en, ILUMINACION_pt } from '../../../../../../data/iluminacion';
import { GASES_en, GASES_es, GASES_pt } from '../../../../../../data/conexiones';
import BajaTension from './Opciones/BajaTension/BajaTension';
import Botonera from '../Botonera'
import ContainerSelecciones from './Selecciones/ContainerSelecciones';
import GasConector from './Opciones/ConexionGases/GasConector';
import Iluminacion from './Opciones/Iluminacion/Iluminacion';
import LongitudPanel from './Opciones/LongitudPanel/LongitudPanel';
import MediaTension from './Opciones/MediaTension/MediaTension';
import useAgregarCarrito from 'hooks/ecommerce/useAgregarCarrito';
import { useTranslation } from 'react-i18next';

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
    const {t, i18n} = useTranslation();

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
              <GasConector item={item} conexiones={conexiones} setConexiones={setConexiones} gases={i18n.language === 'es' ? GASES_es : i18n.language === 'en' ? GASES_en : GASES_pt} />
            }
            { // Todos los productos menos el Panel de Cabecera y el Panel de Gases
                item.mediaTension ? 
                <MediaTension
                  items={i18n.language === 'es' ? MEDIATENSION_es : i18n.language === 'en' ? MEDIATENSION_en : MEDIATENSION_pt } 
                  valoresMediaTension={valoresMediaTension} 
                  setValoresMediaTension={setValoresMediaTension}
                  /> : null
            }
            {
              item.bajaTension ? 
                <BajaTension 
                items={i18n.language === 'es' ? BAJATENSION_es : i18n.language === 'en' ? BAJATENSION_en : BAJATENSION_pt} 
                valoresBajaTension={valoresBajaTension} 
                setValoresBajaTension={setValoresBajaTension}
                /> : null
            }{
              item.iluminacion ? 
                <Iluminacion 
                items={i18n.language === 'es' ? ILUMINACION_es : i18n.language === 'en' ? ILUMINACION_en : ILUMINACION_pt} 
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
              (item.nombre.es === 'Panel de Cabecera') ?
                ((valoresMediaTension.length > 0 || valoresBajaTension.length > 0 || valoresIluminacion.length > 0) && longitudPanel && (conexiones.length>0)) ? <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/> : <p>{t("ecomm.notes.note6")}</p>
              : (item.nombre.es === 'Panel de Gases') ? ((conexiones.length > 0) && longitudPanel) ? <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/> : <p>{t("ecomm.notes.note7")}</p>
              : (item.nombre.es === 'Miniducto') ? ((conexiones.length > 0) && longitudPanel) ? <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/> : <p>{t("ecomm.notes.note7")}</p>
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