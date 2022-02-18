import React, {useRef} from 'react';

import GASES from '../../../../../../data/gases';
import GasItem from './GasItem';
import {MdKeyboardArrowDown} from 'react-icons/md';
import useSeleccionarOpcion from '../../../../../../hooks/ecommerce/useSeleccionarOpcion';

function Gases({item, setGas}) {

    const {mostrarGases, opcionesHandler, setOpcionesHandler} = useSeleccionarOpcion();

    const opcionesRef = useRef();

    function seleccionarElemento(e, id){
        console.log(id);
        setOpcionesHandler(!opcionesHandler)
        setGas(id.toUpperCase());
        mostrarGases(opcionesRef);        
    }


  return (
      <div className='modal-gases'>
        <div className='encabezado'> 
            <p>Gases</p>
            <MdKeyboardArrowDown onClick={()=> mostrarGases(opcionesRef)}/>
        </div>     
        <article className='opciones-gases' ref={opcionesRef}>
        {
            item.gases.aire && <GasItem item={GASES[0]} seleccionarElemento={seleccionarElemento} />
        }
        {
            item.gases.co2 &&  <GasItem item={GASES[1]} seleccionarElemento={seleccionarElemento} />
        }
                {
            item.gases.n2 &&  <GasItem item={GASES[2]} seleccionarElemento={seleccionarElemento} />
        }
                {
            item.gases.n2o && <GasItem item={GASES[3]} seleccionarElemento={seleccionarElemento} />
        }
                {
            item.gases.oxigeno && <GasItem item={GASES[4]} seleccionarElemento={seleccionarElemento} />
        }
                {
            item.gases.oxigeno_aire && <GasItem item={GASES[5]} seleccionarElemento={seleccionarElemento} />
        }
                {
            item.gases.vacio && <GasItem item={GASES[6]} seleccionarElemento={seleccionarElemento} />
        }
        </article>
    </div>
  )
}

export default Gases