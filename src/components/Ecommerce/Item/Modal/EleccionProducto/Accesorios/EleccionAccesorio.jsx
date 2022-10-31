import React, {useRef, useState} from 'react'

import BotonComprar from './BotomComprar';
import Modelo from './Modelo';
import NotificacionAgregado from '../NotificacionAgregado';
import Selecciones from './Selecciones/Selecciones';
import useAgregarAccesorio from 'hooks/ecommerce/accesorio/useAgregarAccesorio';
import useBorrarSeleccion from 'hooks/ecommerce/accesorio/useBorrarSeleccion';
import useSeleccionarAccesorio from 'hooks/ecommerce/accesorio/useSeleccionarAccesorio';

function EleccionAccesorio({item, toggleModal}) {


  const [accesorios, setAccesorios] = useState([]);
  const {agregarAlCarrito} = useAgregarAccesorio({item});
  const {seleccionAccesorio} = useSeleccionarAccesorio(setAccesorios, accesorios);
  const {eliminarSeleccion} = useBorrarSeleccion(setAccesorios, accesorios);
  const refNoti = useRef();
  const gasesHandler = item.gases

  const activarNoti = ()=> {
    refNoti.current.classList.toggle('on')
    setTimeout(()=>{
      refNoti.current.classList.toggle('on')
    }, 2000)
  }
  return (
    <article className='modal-eleccion-acc'>
            {item.modelos.map(
                acc => <Modelo accesorio={acc} seleccionAccesorio={seleccionAccesorio} activarNoti={activarNoti} gasesHandler={gasesHandler}  key={acc.nombre} />
            )}
            <Selecciones accesorios={accesorios} eliminarSeleccion={eliminarSeleccion} />
            <BotonComprar accesorios={accesorios} setAccesorios={setAccesorios} agregarAlCarrito={agregarAlCarrito} toggleModal={toggleModal} />
            <NotificacionAgregado refNoti={refNoti}/>
    </article>

  )
}

export default EleccionAccesorio