import React,{useRef} from 'react';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import useOpcionesBajatension from 'hooks/ecommerce/unidadSuministro/useOpcionesBajaTension';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import OpcionItem from '../OpcionItem/OpcionItem';
import { useTranslation } from 'react-i18next';

function BajaTension({items, valoresBajaTension , setValoresBajaTension}) {
  const opcionesRef = useRef();    
  const {mostrarBajaTension, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();
  const {obtenerCantidadInput} = useOpcionesBajatension(valoresBajaTension, setValoresBajaTension);
  const {t} = useTranslation();

  function confirmarItems(e){
    setOpcionesHandler(!opcionesHandler)
    mostrarBajaTension(opcionesRef);     
}

return (
  <article className='eleccion-unidsum'>
      <EncabezadoOpciones titulo={t("ecomm.categorias.f")} mostrarOpcion={mostrarBajaTension} opcionesRef={opcionesRef}/>
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

export default BajaTension

//<BajaTensionItem item={item} key={item}/>