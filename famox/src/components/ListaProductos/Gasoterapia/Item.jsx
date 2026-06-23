import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Item({product}) {
  const { i18n } = useTranslation();
  const lang = i18n.language;  
  return(
    <div className='item'>
      <div className='item-container'>
        <Link to={'/gasoterapia/' + product._id}>
          <img src={product.img} loading='lazy' alt={"equipo " + product.nombre} />
        </Link>
        <Link to={'/gasoterapia/' + product._id}>
          <h3>{product.nombre[lang]}</h3>
        </Link>
      </div>
    </div>
  )
}

export default Item;
