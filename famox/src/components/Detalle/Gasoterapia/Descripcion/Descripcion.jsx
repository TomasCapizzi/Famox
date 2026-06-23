import Gases from './Gases';
import { useTranslation } from 'react-i18next';

function Descripcion({product, lang}) {
    const {t} = useTranslation();
  return (
    <div className='uso'>
        <div className='descripcion'>
            <h2>{t("productos.detalle.op3")}</h2>
            <p>{product.uso[lang]}</p>
        </div>
        {
            (product.rango !== null ) &&         
                <div className='rango'>
                    <h2>{t("productos.detalle.op4")}</h2>
                    <p>{product.rango[lang]}</p>
                </div>
        }
        {
            product.gas && <Gases product={product.gases_} />
        }
        {
            product.anmat ?
                <div className='anmat'>
                    <p>{t("productos.detalle.op5")}</p>
                </div>
            : null
        }
    </div>
  )
}

export default Descripcion;
