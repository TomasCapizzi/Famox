import React,{useRef} from 'react';
import useAgregarEquipoDig from 'hooks/ecommerce/equipoDigital/useAgregarEquipoDig';
import SeleccionContainer from './Selecciones/SeleccionContainer';
import useEliminarSelecciones from 'hooks/ecommerce/equipoDigital/useEliminarSeleccion';
import ModeloContainer from './Opciones/ModeloContainer';
import Botonera from '../Botonera';
import NotificacionAgregadoModelo from '../Gasoterapia/Opciones/Modelo/NotificacionAgregadoModelo';

function EleccionEquipoDigital({item}) {

    const refNotificacionModelo = useRef();
  
    const {agregarAlCarrito, setModelo, modelo} = useAgregarEquipoDig({item});
    const {eliminarSeleccion} = useEliminarSelecciones(setModelo);

    return (
      <div className='eleccion-producto'>          
        <div className='container' >
            <div className='container-opciones'>
                {
                    item.modelos && <ModeloContainer item={item} setModelo={setModelo}/>
                }
            </div>
            {modelo ? 
                <SeleccionContainer modelo={modelo} eliminarSeleccion={eliminarSeleccion} />
                : null
            }
        </div>
        {
            modelo ? <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={eliminarSeleccion}/> : <p>Elige el modelo</p>
        }
        <NotificacionAgregadoModelo refNotificacionModelo={refNotificacionModelo}/>
      </div>
    )
  }

export default EleccionEquipoDigital