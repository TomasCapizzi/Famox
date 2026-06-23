import useNotificacion from 'hooks/ecommerce/useNotificacion';
import Item from './Item';
import React,{useRef} from 'react';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import { useTranslation } from 'react-i18next';

function Modelos({item, setModelo, refNotificacionModelo}) {

  const opcionesRef = useRef();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const {mostrarModelos,opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
  const {activarNoti} = useNotificacion();
  const {t} = useTranslation();
  
  function seleccionarElemento(e, id){
    setOpcionesHandler(!opcionesHandler)
    setModelo(e);
    mostrarModelos(opcionesRef);   
    activarNoti(refNotificacionModelo);
}

  return (
    <article className='modal-modelos-container'>
      <EncabezadoOpciones titulo={t("ecomm.categorias.b")} mostrarOpcion={mostrarModelos} opcionesRef={opcionesRef}/>
      <article ref={opcionesRef} className='opciones-modelos'>
        {
          item.modelos && item.modelos_.map(
            modelo => <Item key={modelo.nombre[lang]? modelo.nombre[lang]:modelo.nombre} modelo={modelo} seleccionarElemento={seleccionarElemento}/>
          )
        }
        </article>
    </article>
  )
}

export default Modelos
