import React,{useRef} from 'react'
import EncabezadoAccesorios from './EncabezadoAccesorios'
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import ItemModeloUnidSum from './ItemModeloUnidSum';
import { useTranslation } from 'react-i18next';

function ModeloUnidSum({accesorio, seleccionAccesorioUS, accesoriosUSHandler, activarNoti, refNoti}) {
  const { i18n } = useTranslation();
  const lang = i18n.language; 
  const opcionesRef = useRef();
  const {mostrarAccesorios} = useMostrarOpciones();
  const {modelos} = accesorio;

  function agregarAcc(item){  
      accesoriosUSHandler ?   
      seleccionAccesorioUS(item) :
        seleccionAccesorioUS(item)
      activarNoti(refNoti)
    mostrarAccesorios(opcionesRef);
  }

  return (
    <div className='modelo-acc-us'>
      <EncabezadoAccesorios item={accesorio} mostrarOpcion={mostrarAccesorios} opcionesRef={opcionesRef}/>
      <article ref={opcionesRef} className='opciones-accesorios'>
        {
          modelos ? 
            modelos.map(
              item => <ItemModeloUnidSum item={item} agregarAcc={agregarAcc} key={item.nombre[lang]}/>
            ) 
            : null
        }    
      </article>
    </div>
  )
}

export default ModeloUnidSum