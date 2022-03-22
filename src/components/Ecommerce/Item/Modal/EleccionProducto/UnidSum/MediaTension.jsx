import React,{useRef, useState} from 'react';

import {MdKeyboardArrowDown} from 'react-icons/md';
import MediaTensionItem from './Items/MediaTensionItem';
import useSeleccionarOpcion from '../../../../../../hooks/ecommerce/useSeleccionarOpcion';

function MediaTension({items, valoresMediaTension,setValoresMediaTension }) {

    const opcionesRef = useRef();


    const {mostrarMediaTension, opcionesHandler, setOpcionesHandler} = useSeleccionarOpcion();

    function confirmarItems(e){
        setOpcionesHandler(!opcionesHandler)
        mostrarMediaTension(opcionesRef);     
    }
    function obtenerCantidadInput(e, item){
        if(valoresMediaTension.length === 0){
            const valor = {
                nombre: item,
                cantidad: e.target.value
            }
            setValoresMediaTension([valor])
        } else{
            const coincidencia = valoresMediaTension.filter(
                valor => valor.nombre === item
            )
            if(coincidencia){
                const filtrado = valoresMediaTension.filter(
                    valor => valor.nombre !== item
                )

                const valor = {
                    nombre: item,
                    cantidad: parseInt(e.target.value)
                }
                setValoresMediaTension([...filtrado, valor])
                
            } else{
                const valor = {
                    nombre: item,
                    cantidad: e.target.value
                }
                setValoresMediaTension([
                    ...valoresMediaTension,
                    valor
                ])
            }
        }
    }

  return (
    <article className='modal-mediatension'>
        <div className='encabezado'>
            <p>Media Tensión</p>
            <MdKeyboardArrowDown onClick={()=> mostrarMediaTension(opcionesRef)} />
        </div>
        <article className='opciones' ref={opcionesRef}>
            <button onClick={()=> confirmarItems()}>
                Confirmar
            </button>
            {
                items.map(
                    item => <MediaTensionItem item={item} key={item} obtenerCantidadInput={obtenerCantidadInput}/>
                )
            }
        </article>

    </article>
  )
}

export default MediaTension