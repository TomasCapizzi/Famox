import React,{useRef} from 'react';
import EncabezadoOpciones from '../../EncabezadoOpciones';
import Modelo from './Modelo';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
//import useNotificacion from 'hooks/ecommerce/useNotificacion';

function ModeloContainer({item, setModelo}) {

    const opcionesRef = useRef();

    const {mostrarModelos,opcionesHandler, setOpcionesHandler} = useMostrarOpciones();

    //const {activarNoti} = useNotificacion();

    function agregarEquipoDigital(e){
        setOpcionesHandler(!opcionesHandler);
        setModelo(e);
        mostrarModelos(opcionesRef);
        //activarNoti(refNoti)
    }

  return (
    <div className='eleccion-equiposDig'>
        <EncabezadoOpciones titulo="Modelos" mostrarOpcion={mostrarModelos} opcionesRef={opcionesRef}/>
        <article ref={opcionesRef} className='opciones'>
            {
                item.modelos_.map(
                    item => <Modelo key={item.nombre} item={item} agregarEquipoDigital={agregarEquipoDigital}/>
                )
            }        
        </article>
    </div>
  )
}

export default ModeloContainer