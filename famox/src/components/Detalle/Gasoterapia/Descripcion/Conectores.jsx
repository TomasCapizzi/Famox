import CONECTORES from 'data/conectores';
import { useTranslation } from 'react-i18next';

function Conectores({product}) {
    const {t} = useTranslation();
  return (
    <article className='conectores'>
        <h4>{t("productos.detalle.op1")}</h4>
        <div className='conec-info'>
            {
                product.map(
                    item => 
                    <div className='conector' key={item}>
                        <img src={'/' + CONECTORES.filter(conec=> conec.nombre === item)[0].img} alt={item.nombre} />
                        <h5>{item}</h5>
                    </div>
                )
            }
        </div>
    </article>
  )
}

export default Conectores;
