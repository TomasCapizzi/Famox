import React,{useRef} from 'react';

import IluminacionItem from './Items/IluminacionItem';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useSeleccionarOpcion from '../../../../../../hooks/ecommerce/useSeleccionarOpcion';

function Iluminacion({items,valoresIluminacion, setValoresIluminacion}) {
  const opcionesRef = useRef();
    
  const {mostrarIluminacion, opcionesHandler, setOpcionesHandler} = useSeleccionarOpcion();

  function confirmarItems(e){
    setOpcionesHandler(!opcionesHandler)
    mostrarIluminacion(opcionesRef);     
}
function obtenerCantidadInput(e, item){
  if(valoresIluminacion.length === 0){
      const valor = {
            nombre: item,
            cantidad: e.target.value
      }
      setValoresIluminacion([valor])
  } else{
      const coincidencia = valoresIluminacion.filter(
          valor => valor.nombre === item
      )
      if(coincidencia){
          const filtrado = valoresIluminacion.filter(
              valor => valor.nombre !== item
          )

          const valor = {
            nombre: item,
            cantidad: parseInt(e.target.value)
          }
          setValoresIluminacion([...filtrado, valor])
          
      } else{
          const valor = {
            nombre: item,
            cantidad: e.target.value
          }
          setValoresIluminacion([
              ...valoresIluminacion,
              valor
          ])
      }
  }
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