import React,{useRef} from 'react';

import IluminacionItem from 'components/Ecommerce/Item/Modal/EleccionProducto/UnidSum/Opciones/Iluminacion/IluminacionItem';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesIluminacion from 'hooks/ecommerce/unidadSuministro/useOpcionesIluminacion';

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
    <div className='encabezado'>
        <p>Iluminación</p>
        <MdKeyboardArrowDown onClick={()=> mostrarIluminacion(opcionesRef)} />
    </div>
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