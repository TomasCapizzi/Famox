import { useTranslation } from "react-i18next"

function DetalleUSMediaTension({item}) {

  const {t} = useTranslation();
  return (
    <td className='filter'>
        <h5>{t("cart.tabla.t10")}</h5>
        <ul>
            {
                item.mediaTension.map(
                    item => 
                        <li className='propiedad'  key={item.nombre}>{item.nombre} {t("cart.tabla.t4")}: {item.cantidad}</li>
                )
            }
        </ul>
    </td>
  )
}

export default DetalleUSMediaTension