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
