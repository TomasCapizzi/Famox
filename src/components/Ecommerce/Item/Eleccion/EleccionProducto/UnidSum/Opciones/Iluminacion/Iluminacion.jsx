import React,{useRef} from 'react';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesIluminacion from 'hooks/ecommerce/unidadSuministro/useOpcionesIluminacion';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import OpcionItem from '../OpcionItem/OpcionItem';

function Iluminacion({items,valoresIluminacion, setValoresIluminacion}) {
  const opcionesRef = useRef();    
  const {mostrarIluminacion, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
  const {obtenerCantidadInput} = useOpcionesIluminacion(setValoresIluminacion, valoresIluminacion);

  function confirmarItems(e){
    setOpcionesHandler(!opcionesHandler)
    mostrarIluminacion(opcionesRef);     
  }

  return (
    <article className='eleccion-unidsum'>
    <EncabezadoOpciones titulo="Iluminación" mostrarOpcion={mostrarIluminacion} opcionesRef={opcionesRef} />
    <article className='opciones' ref={opcionesRef}>
      <button onClick={()=> confirmarItems()}>Confirmar</button>
      {
          items.map(
              item => <OpcionItem item={item} key={item} obtenerCantidadInput={obtenerCantidadInput}/>
          )
      }
    </article>
</article>
  )
}

export default Iluminacion