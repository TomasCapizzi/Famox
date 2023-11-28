import useNotificacion from 'hooks/ecommerce/useNotificacion';
import Item from './Item';
import React,{useRef} from 'react';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';

function Modelos({item, setModelo, refNotificacionModelo}) {

  const opcionesRef = useRef();

  const {mostrarModelos,opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
  const {activarNoti} = useNotificacion();

  function seleccionarElemento(e, id){
    setOpcionesHandler(!opcionesHandler)
    setModelo(e);
    mostrarModelos(opcionesRef);   
    activarNoti(refNotificacionModelo);
}

  return (
    <article className='modal-modelos-container'>
      <EncabezadoOpciones titulo="Modelos" mostrarOpcion={mostrarModelos} opcionesRef={opcionesRef}/>
      <article ref={opcionesRef} className='opciones-modelos'>
        {
          item.modelos && item.modelos_.map(
            modelo => <Item key={modelo._id} modelo={modelo} seleccionarElemento={seleccionarElemento}/>
          )
        }
        </article>
    </article>
  )
}

export default Modelos
