import ModeloItem from './ModeloItem';
import Spinner from 'components/Spinner/Spinner';
import { useTranslation } from 'react-i18next';

function Modelos({modelos, lang}) {

    const {t} = useTranslation();   

  return (
    <article className='modelos'>
        <h4>{t("ecomm.categorias.b")}</h4>
        <div className='modelo-info'>
            {
                modelos.length > 0 ? 
                    modelos.map(
                        item => <ModeloItem item={item} key={item.nombre} lang={lang} />
                    )
                : <Spinner />
            }
        </div>

    </article>
  )
}

export default Modelos
