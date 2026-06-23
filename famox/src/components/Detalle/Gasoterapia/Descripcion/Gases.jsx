import GASES from 'data/gases';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Gases({product}) {
    const {t} = useTranslation();
//    const [img, setImg] = useState()
    return (

        <article className='gases'>
            <h4>{t("productos.detalle.op2")}</h4>
            <div>
                {product &&
                    product.map(
                        item => <img src={'/'+ GASES.filter(gas => gas.nombre === item)[0].img} alt={item} key={item} />
                    )
                }
                
            </div>
        </article>    
    )
}

export default Gases;
