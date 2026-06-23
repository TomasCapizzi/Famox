import { useTranslation } from 'react-i18next';

function Descripcion({item}) {
  const { i18n } = useTranslation();
  const lang = i18n.language; 
  const anchoPantalla = window.innerWidth;
  return (
    <div className='item-info'>
        <h5>{item.nombre[lang]}</h5>
        <img src={anchoPantalla>1024 && item.portada? item.portada : item.img} loading='lazy' alt={item.nombre[lang]}/>
    </div>
  )
}

export default Descripcion;