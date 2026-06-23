import Botonera from '../Botonera';
import { useTranslation } from 'react-i18next';

function HabilitacionBotonera({item, conector, gas, rango, modelo, agregarAlCarrito, eliminarSeleccionConector, eliminarSeleccionGas, eliminarSeleccionRango, eliminarSeleccionModelo, refNotificacionCompra}) {

  const {t} = useTranslation();

  function borrarSelecciones(){
    conector && eliminarSeleccionConector();
    gas && eliminarSeleccionGas();
    rango && eliminarSeleccionRango();
    modelo && eliminarSeleccionModelo();
  }

  return (
    <>
        { // Habilitacion de Botonera
        (item.gases_ && item.conectores && !item.modelos && item.rangos) ?
        (conector && gas && rango) ?
            <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/>
        : <p className='botonera-adv'>{t("ecomm.notes.note2")}</p>

        : (!item.rangos && item.gas && item.conexion && !item.modelos ) ?
        (conector && gas)? <Botonera agregarAlCarrito={agregarAlCarrito}  borrarSelecciones={borrarSelecciones} />
        : <p className='botonera-adv'>{t("ecomm.notes.note3")}</p>

        : (item.gas && item.conexion === false) ? 
        (gas) ?
        <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/>
        : <p className='botonera-adv'>{t("ecomm.notes.note5")}</p>

        : (item.gas === false && item.conexion) ?
        (conector) ?
        <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/>
        : <p className='botonera-adv'>{t("ecomm.notes.note8")}</p>

        : (item.modelos && !item.gas && !item.conexion ) ?
        modelo ? <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones} refNotificacionCompra={refNotificacionCompra}/>
        : <p className='botonera-adv'>{t("ecomm.notes.note1")}</p>

        : (item.gas && item.conexion && item.modelos) ?
        (conector && gas && modelo) ? 
        <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones}/>
        : <p className='botonera-adv'>{t("ecomm.notes.note4")}</p>

        : <Botonera agregarAlCarrito={agregarAlCarrito} borrarSelecciones={borrarSelecciones} />
        }
    </>
  )
}

export default HabilitacionBotonera