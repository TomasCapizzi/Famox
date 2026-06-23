import { useTranslation } from 'react-i18next';
import {MdKeyboardArrowDown} from 'react-icons/md';

function EncabezadoAccesorios({item, mostrarOpcion, opcionesRef}) {
  const { i18n } = useTranslation();
  const lang = i18n.language; 
  return (
    <div className='encabezado-acc' onClick={()=> mostrarOpcion(opcionesRef)}>
      <img src={item.img} alt="accesorio" />
      <p>{item.nombre[lang]}</p>
      <MdKeyboardArrowDown />
    </div>
  )
}

export default EncabezadoAccesorios