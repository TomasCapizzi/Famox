import React,{useRef} from 'react';

import IluminacionItem from 'components/Ecommerce/Item/Modal/EleccionProducto/UnidSum/Opciones/Iluminacion/IluminacionItem';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesIluminacion from 'hooks/ecommerce/unidadSuministro/useOpcionesIluminacion';
import EncabezadoOpciones from '../../../EncabezadoOpciones';

function Iluminacion({items,valoresIluminacion, setValoresIluminacion}) {
  const opcionesRef = useRef();    
  const {mostrarIluminacion, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
  const {obtenerCantidadInput} = useOpcionesIluminacion(setValoresIluminacion, valoresIluminacion);

  function confirmarItems(e){
    setOpcionesHandler(!opcionesHandler)
    mostrarIluminacion(opcionesRef);     
  }

  return (
    <article className='modal-iluminacion'>
    <EncabezadoOpciones titulo="Iluminación" mostrarOpcion={mostrarIluminacion} opcionesRef={opcionesRef} />
    <article className='opciones' ref={opcionesRef}>
      <button onClick={()=> confirmarItems()}>
          Confirmar
      </button>
      {
          items.map(
              item => <IluminacionItem item={item} key={item} obtenerCantidadInput={obtenerCantidadInput}/>
          )
      }
    </article>

</article>
  )
}

export default Iluminacion