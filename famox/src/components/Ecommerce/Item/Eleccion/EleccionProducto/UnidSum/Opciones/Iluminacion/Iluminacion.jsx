import React,{useRef} from 'react';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesIluminacion from 'hooks/ecommerce/unidadSuministro/useOpcionesIluminacion';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import OpcionItem from '../OpcionItem/OpcionItem';
import { useTranslation } from 'react-i18next';

function Iluminacion({items,valoresIluminacion, setValoresIluminacion}) {
  const opcionesRef = useRef();    
  const {mostrarIluminacion, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
  const {obtenerCantidadInput} = useOpcionesIluminacion(setValoresIluminacion, valoresIluminacion);

  const {t} = useTranslation();

  function confirmarItems(e){
    setOpcionesHandler(!opcionesHandler)
    mostrarIluminacion(opcionesRef);     
  }

  return (
    <article className='eleccion-unidsum'>
    <EncabezadoOpciones titulo={t("ecomm.categorias.g")} mostrarOpcion={mostrarIluminacion} opcionesRef={opcionesRef} />
    <article className='opciones' ref={opcionesRef}>
      <button onClick={()=> confirmarItems()}>{t("ecomm.steps.o")}</button>
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