import {useContext} from 'react';

import {BsTrashFill} from 'react-icons/bs';
import {CarritoContext} from 'store/carritoContext';
import { useTranslation } from 'react-i18next';

function CarritoItem({item}) {
// Carrito Item para los equipos de GASOTERAPIA
  const {removerItem} = useContext(CarritoContext);
  const {t} = useTranslation();
  const { i18n } = useTranslation();
  const lang = i18n.language; 

  if (item.nombre?.es === "Llave de Vacío") {
    console.log("Llave de Vacío:", item);
  }
   
  return (
    <tr className='carrito-item'>
      <td>
        <img src={item.img} alt="" />
        <p>{item.nombre[lang]}</p>
      </td>
      <td>
        <ul className='opciones'>
            {
            item.gas &&       
                <li>{t("cart.tabla.t6")} <span>{item.gas}</span></li>
          }
          {
            item.conector && 
                <li>{t("cart.tabla.t7")} <span>{item.conector}</span></li>            
          }
          {
            item.rango &&
                <li>{t("cart.tabla.t8")} <span>{item.rango}</span></li>
          }
          {
            item.modelo &&
                <li>{item.modelo.uso? item.modelo.uso[lang] :  item.modelo.nombre[lang]}</li>
          }
        </ul>
      </td>
      <td data-label={t("cart.tabla.t3")}>
        <p>{item.codigo || item.modelo?.codigo || "—"}</p>
      </td>

      <td data-label={t("cart.tabla.t4")}>
        <p>{item.cantidad}</p>
      </td>
      <td><BsTrashFill onClick={()=> removerItem(item)} /></td>    
    </tr>
  )
}

export default CarritoItem;