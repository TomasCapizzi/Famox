import React,{useRef} from 'react'
import EncabezadoAccesorios from './EncabezadoAccesorios'
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import ItemModeloUnidSum from './ItemModeloUnidSum';

function ModeloUnidSum({accesorio, seleccionAccesorioUS, accesoriosUSHandler, activarNoti, refNoti}) {

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
              item => <ItemModeloUnidSum item={item} agregarAcc={agregarAcc} key={item.nombre}/>
            ) 
            : null
        }    
      </article>
    </div>
  )
}

export default ModeloUnidSum