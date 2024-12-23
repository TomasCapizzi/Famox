import Conectores from './Opciones/Conector/Conectores'
import Gases from './Opciones/Gas/Gases'
import Modelos from './Opciones/Modelo/Modelos'
import Rango from './Opciones/Rango/Rango'
import React, {useRef, useEffect} from 'react'
import useAgregarCarrito from 'hooks/ecommerce/useAgregarCarrito'
import useEliminarSelecciones from 'hooks/ecommerce/gasoterapia/useEliminarSelecciones'
import SeleccionContainer from './Selecciones/SeleccionContainer'
import NotificacionAgregadoModelo from './Opciones/Modelo/NotificacionAgregadoModelo'
import HabilitacionBotonera from './HabilitacionBotonera'

function EleccionGasoterapia({item}) {

  const refNotificacionModelo = useRef();
  const refNotificacionCompra = useRef();

  const {agregarAlCarrito, setConector, setGas, setModelo, setRango, modelo, conector, gas, rango} = useAgregarCarrito({item});

  const {eliminarSeleccionConector, eliminarSeleccionGas, eliminarSeleccionRango, eliminarSeleccionModelo} = useEliminarSelecciones(setConector, setGas, setRango, setModelo)

  useEffect(()=>{
    if(item.gases_.length === 1){
      setGas(item.gases_[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='eleccion-producto'>
        {
          item && 
          <div className='container' >
            <div className='container-opciones'>
              { item.conectores ? <Conectores items={item.conectores} setConector={setConector} /> : null }
              { item.gases_.length > 1 ? <Gases items={item.gases_} setGas={setGas} /> : null }
              { item.rangos ? <Rango item={item} setRango={setRango} />: null }
              { item.modelos ? <Modelos item={item} setModelo={setModelo} refNotificacionModelo={refNotificacionModelo} /> : null }
            </div>
            { // Selecciones de Gas, Conectores, Modelos y Rangos
              item.gases_ || item.conectores || item.modelos || item.rangos ? 
                <SeleccionContainer gas={gas} conector={conector} rango={rango} modelo={modelo} item={item} eliminarSeleccionConector={eliminarSeleccionConector} eliminarSeleccionGas={eliminarSeleccionGas} eliminarSeleccionRango={eliminarSeleccionRango} eliminarSeleccionModelo={eliminarSeleccionModelo} />
              : null
              }
          </div> 
        }
        <HabilitacionBotonera item={item} conector={conector} gas={gas} rango={rango} modelo={modelo} agregarAlCarrito={agregarAlCarrito} eliminarSeleccionConector={eliminarSeleccionConector} eliminarSeleccionGas={eliminarSeleccionGas} eliminarSeleccionRango={eliminarSeleccionRango} eliminarSeleccionModelo={eliminarSeleccionModelo} refNotificacionCompra={refNotificacionCompra}/>
        <NotificacionAgregadoModelo refNotificacionModelo={refNotificacionModelo}/>
    </div>
  )
}

export default EleccionGasoterapia;