import {useRef} from 'react';

import Item from './Item';
import useMostrarOpciones from 'hooks/ecommerce/useMostrarOpciones';
import EncabezadoOpciones from '../../../EncabezadoOpciones';
import { useTranslation } from 'react-i18next';

function Rango({item, setRango}){

    const opcionesRef = useRef();
    const {t} = useTranslation();

    const {mostrarRangos, opcionesHandler, setOpcionesHandler} = useMostrarOpciones();

    function seleccionarElemento(e, id){
        setOpcionesHandler(!opcionesHandler)
        setRango(id.toUpperCase());
        mostrarRangos(opcionesRef);        
    }

  return (
    <div className='modal-rangos'>
        <EncabezadoOpciones titulo={t("ecomm.categorias.d")} mostrarOpcion={mostrarRangos} opcionesRef={opcionesRef} />
        <article ref={opcionesRef} className='opciones-rangos'>
        {
          item.rangos && item.rangos.map(
            rango => <Item key={rango._id} rango={rango} seleccionarElemento={seleccionarElemento}/>
          )
        }
        </article>
    </div>
  )
}

export default Rango