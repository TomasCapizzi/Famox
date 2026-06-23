import Conexiones from './Conexiones';
import React from 'react';
import Selecciones from './Selecciones';
import Longitud from './Longitud';
import { useTranslation } from 'react-i18next';

function ContainerSelecciones({conexiones, eliminarItem, valoresBajaTension, valoresIluminacion, valoresMediaTension, longitudPanel}) {

  const {t} = useTranslation()
    
  return (
    <div className='selecciones-container-us'>
      {conexiones.length >= 1 && <h6>{t("ecomm.steps.h")}</h6>}
      {
      conexiones.length >= 1 ? <Conexiones conexiones={conexiones} eliminarItem={eliminarItem}/> : null
      }
      {valoresMediaTension.length >= 1 && <h6>{t("ecomm.categorias.e")}</h6>}
      {
      valoresMediaTension.length >= 1 ? <Selecciones valores={valoresMediaTension} eliminarItem={eliminarItem} /> : null
      }
      {valoresBajaTension.length >= 1 && <h6>{t("ecomm.categorias.f")}</h6>}
      {
      valoresBajaTension.length >= 1 ? <Selecciones valores={valoresBajaTension} eliminarItem={eliminarItem} /> : null
      }
      {valoresIluminacion.length >= 1 && <h6>{t("ecomm.categorias.g")}</h6>}
      {
      valoresIluminacion.length >= 1 ? <Selecciones valores={valoresIluminacion} eliminarItem={eliminarItem} /> : null
      }
      {longitudPanel && <h6>{t("ecomm.categorias.h")}</h6>}
      {
        longitudPanel ? <Longitud longitudPanel={longitudPanel} eliminarItem={eliminarItem}/> : null
      }
    </div>
  )
}

export default ContainerSelecciones