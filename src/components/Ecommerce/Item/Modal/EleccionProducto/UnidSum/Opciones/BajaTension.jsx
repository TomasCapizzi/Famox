import React,{useRef} from 'react';

import BajaTensionItem from 'components/Ecommerce/Item/Modal/EleccionProducto/UnidSum/Items/BajaTensionItem';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useSeleccionarOpcion from 'hooks/ecommerce/useSeleccionarOpcion';

function BajaTension({items, valoresBajaTension , setValoresBajaTension}) {
  const opcionesRef = useRef();    
  const {mostrarBajaTension, opcionesHandler, setOpcionesHandler} = useSeleccionarOpcion();


  function confirmarItems(e){
    setOpcionesHandler(!opcionesHandler)
    mostrarBajaTension(opcionesRef);     
}

function obtenerCantidadInput(e, item){
    if(valoresBajaTension.length === 0){
        const valor = {
            nombre: item,
            cantidad: e.target.value
        }
        setValoresBajaTension([valor])
    } else{
        const coincidencia = valoresBajaTension.filter(
            valor => valor.nombre === item
        )
        if(coincidencia){
            const filtrado = valoresBajaTension.filter(
                valor => valor.nombre !== item
            )

            const valor = {
                nombre: item,
                cantidad: parseInt(e.target.value)
            }
            setValoresBajaTension([...filtrado, valor])
            
        } else{
            const valor = {
                nombre: item,
                cantidad: e.target.value
            }
            setValoresBajaTension([
                ...valoresBajaTension,
                valor
            ])
        }
    }
}

return (
  <article className='modal-bajatension'>
      <div className='encabezado'>
          <p>Baja Tensión</p>
          <MdKeyboardArrowDown onClick={()=> mostrarBajaTension(opcionesRef)} />
      </div>
      <article className='opciones' ref={opcionesRef}>
            <button onClick={()=> confirmarItems()}>
                Confirmar
            </button>
            {
                items.map(
                    item => <BajaTensionItem item={item} key={item} obtenerCantidadInput={obtenerCantidadInput}/>
                )
            }
        </article>

  </article>
)
}

export default BajaTension

//<BajaTensionItem item={item} key={item}/>