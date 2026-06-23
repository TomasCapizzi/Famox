import React, {useRef} from 'react';

import CONECTORES from 'data/conectores';
import Item from './Item';

import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import { useTranslation } from 'react-i18next';

function Conectores({items, setConector}) {

    const {setOpcionesHandler, mostrarConectores, opcionesHandler} = useMostrarOpciones();

    const opcionesRef = useRef();
    const {t} = useTranslation()

    function seleccionarElemento(e, id){        
        setOpcionesHandler(!opcionesHandler)
        setConector(id);
        mostrarConectores(opcionesRef);        
    }

  return (
      <div className='modal-conectores '>
        <EncabezadoOpciones titulo={t("ecomm.categorias.a")} mostrarOpcion={mostrarConectores} opcionesRef={opcionesRef}/>
        <article ref={opcionesRef} className='opciones-conectores'>
            {
                items.map(
                    item =>  <Item item={CONECTORES.filter(conec => conec.nombre === item)} seleccionarElemento={seleccionarElemento} opcionesHandler={opcionesHandler} key={item} />
                )
            }        
        </article>
    </div>
    
  )
}

export default Conectores