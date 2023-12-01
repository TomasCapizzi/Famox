import React, {useRef, useState} from 'react'

import BotonComprar from './BotomComprar';
import Modelo from './Modelo';
import NotificacionAgregado from '../NotificacionAgregado';
import Selecciones from './Selecciones/Selecciones';
import useAgregarAccesorio from 'hooks/ecommerce/accesorio/useAgregarAccesorio';
import useBorrarSeleccion from 'hooks/ecommerce/accesorio/useBorrarSeleccion';
import useSeleccionarAccesorio from 'hooks/ecommerce/accesorio/useSeleccionarAccesorio';
import useNotificacion from 'hooks/ecommerce/useNotificacion';
import ModeloUnidSum from './ModeloUnidSum';
import Botonera from './Botonera';

function EleccionAccesorio({item}) {
  const [accesorios, setAccesorios] = useState([]);
  const {agregarAlCarrito, agregarAlCarritoUS} = useAgregarAccesorio({item});
  const {seleccionAccesorio, seleccionAccesorioUS} = useSeleccionarAccesorio(setAccesorios, accesorios);
  const {eliminarSeleccion} = useBorrarSeleccion(setAccesorios, accesorios);
  const refNoti = useRef();
  const gasesHandler = item.gases
  const accesoriosUSHandler = item.accesorioUS;
  const {activarNoti} = useNotificacion();

  return (
    <article className='eleccion-accesorio'>
      <div className='acc-container'>
        {
          item.gases &&
            item.modelos.map(
              acc => <Modelo accesorio={acc} seleccionAccesorio={seleccionAccesorio} activarNoti={activarNoti} gasesHandler={gasesHandler} refNoti={refNoti}  key={acc.nombre} />
            )
        }
        {
          item.accesorioUS &&
            item.modelos.map(
              acc => <ModeloUnidSum key={acc.nombre} accesorio={acc} seleccionAccesorioUS={seleccionAccesorioUS} accesoriosUSHandler={accesoriosUSHandler} activarNoti={activarNoti} refNoti={refNoti}/>
            )
        }
      </div>
      <div className='acc-selecc-container'>
        <Selecciones accesorios={accesorios} eliminarSeleccion={eliminarSeleccion} />
        {
          item.gases ?
          <BotonComprar accesorios={accesorios} setAccesorios={setAccesorios} agregarAlCarrito={agregarAlCarrito}/>
          : <Botonera accesorios={accesorios} setAccesorios={setAccesorios} agregarAlCarrito={agregarAlCarritoUS}/>
        }

      </div>
      <NotificacionAgregado refNoti={refNoti}/>
    </article>
  )
}

export default EleccionAccesorio