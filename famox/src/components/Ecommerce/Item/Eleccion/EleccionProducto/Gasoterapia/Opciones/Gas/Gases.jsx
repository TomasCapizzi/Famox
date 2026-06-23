import React, {useRef} from 'react';

import GASES from 'data/gases';
import Item from './Item';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import { useTranslation } from 'react-i18next';

function Gases({items, setGas}) {

    const {mostrarGases, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();

    const opcionesRef = useRef();
    const {t} = useTranslation();

    function seleccionarElemento(e, id){
        setOpcionesHandler(!opcionesHandler)
        setGas(id);
        mostrarGases(opcionesRef);        
    }

  return (
      <div className='modal-gases'>
        <EncabezadoOpciones titulo={t("ecomm.categorias.c")} mostrarOpcion={mostrarGases} opcionesRef={opcionesRef} />
        <article className='opciones-gases' ref={opcionesRef}>
            {
                items.map(
                    item => <Item item={GASES.filter(gas => gas.nombre === item)} seleccionarElemento={seleccionarElemento} key={item} />
                )
            }
        </article>
    </div>
  )
}

export default Gases