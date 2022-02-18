import React, {useRef} from 'react';

import CONECTORES from '../../../../../../data/conectores';
import {MdKeyboardArrowDown} from 'react-icons/md';
import OpcionItem from './OpcionItem';
import useSeleccionarOpcion from '../../../../../../hooks/ecommerce/useSeleccionarOpcion';

function Conectores({item, setConector}) {

    const {setOpcionesHandler, mostrarConectores, opcionesHandler} = useSeleccionarOpcion();

    const opcionesRef = useRef();

    function seleccionarElemento(e, id){        
        console.log(id);
        setOpcionesHandler(!opcionesHandler)
        setConector(id.toUpperCase());
        mostrarConectores(opcionesRef);        
    }

  return (
      <div className='modal-conectores '>
        <div className='encabezado'>
            <p>Conectores</p>
            <MdKeyboardArrowDown onClick={()=> mostrarConectores(opcionesRef)}/>
        </div>
        <article ref={opcionesRef} className='opciones-conectores'>
        {
            item.conector.diss && <OpcionItem item={CONECTORES[0]} seleccionarElemento={seleccionarElemento} opcionesHandler={opcionesHandler} />

        }
        {
            item.conector.afnor && <OpcionItem item={CONECTORES[1]} seleccionarElemento={seleccionarElemento} opcionesHandler={opcionesHandler}/>     
        }
        {
            item.conector.ss_aga && <OpcionItem item={CONECTORES[2]} seleccionarElemento={seleccionarElemento} opcionesHandler={opcionesHandler} /> 
        }
        {
            item.conector.ohmeda && <OpcionItem item={CONECTORES[3]} seleccionarElemento={seleccionarElemento} opcionesHandler={opcionesHandler} /> 
        }
        {
            item.conector.on && <OpcionItem item={CONECTORES[4]} seleccionarElemento={seleccionarElemento} opcionesHandler={opcionesHandler} /> 
        }
        {
            item.conector.cu &&  <OpcionItem item={CONECTORES[5]} seleccionarElemento={seleccionarElemento}  opcionesHandler={opcionesHandler}/> 
        }
        {
            item.conector.iram && <OpcionItem item={CONECTORES[6]} seleccionarElemento={seleccionarElemento} opcionesHandler={opcionesHandler} /> 
        }
        {
            item.conector.yugo && <OpcionItem item={CONECTORES[7]} seleccionarElemento={seleccionarElemento} opcionesHandler={opcionesHandler} /> 
        }
        </article>
    </div>
    
  )
}

export default Conectores