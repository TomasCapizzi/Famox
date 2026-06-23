import React,{useRef} from 'react';
import EncabezadoOpciones from '../../EncabezadoOpciones';
import Modelo from './Modelo';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import { useTranslation } from 'react-i18next';
//import useNotificacion from 'hooks/ecommerce/useNotificacion';

function ModeloContainer({item, setModelo}) {
    const { i18n } = useTranslation();
    const lang = i18n.language; 
    const opcionesRef = useRef();

    const {mostrarModelos,opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
    const {t} = useTranslation();
    //const {activarNoti} = useNotificacion();

    function agregarEquipoDigital(e){
        setOpcionesHandler(!opcionesHandler);
        setModelo(e);
        mostrarModelos(opcionesRef);
        //activarNoti(refNoti)
    }

  return (
    <div className='eleccion-equiposDig'>
        <EncabezadoOpciones titulo={t("ecomm.categorias.b")} mostrarOpcion={mostrarModelos} opcionesRef={opcionesRef}/>
        <article ref={opcionesRef} className='opciones'>
            {
                item.modelos_.map(
                    item => <Modelo key={item.nombre[lang]} item={item} agregarEquipoDigital={agregarEquipoDigital}/>
                )
            }        
        </article>
    </div>
  )
}

export default ModeloContainer