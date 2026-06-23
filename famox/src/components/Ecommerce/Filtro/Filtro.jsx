import {BiReset} from 'react-icons/bi';

import useFiltro from 'hooks/ecommerce/useFiltro';
import FiltroForm from './FiltroForm';
import { useTranslation } from 'react-i18next';

function Filtro({setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler}) {

    const {filtrar, reset} = useFiltro();
    const {t} = useTranslation();

    return (
        <article className='filtro-container'>
            <div className='filtro-wrap'>
                <FiltroForm filtrar={filtrar} setGasoterapiaHandler={setGasoterapiaHandler} setUnidSumHandler={setUnidSumHandler} setAccesoriosHandler={setAccesoriosHandler} setEquiposDigitalesHandler={setEquiposDigitalesHandler} setHandler={setHandler} />
                <button onClick={()=>reset(setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler)} >{t("ecomm.menu.val2")} <BiReset/></button>
            </div>

        </article>
    )
}

export default Filtro;
