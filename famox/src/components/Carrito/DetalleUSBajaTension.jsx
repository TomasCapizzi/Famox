import { useTranslation } from "react-i18next"

function DetalleUSBajaTension({item}) {

  const {t} = useTranslation();

  return (
    <td className='filter'>
        <h5>{t("cart.tabla.t9")}</h5>
        <ul>
            {
                item.bajaTension.map(
                    item => 
                        <li className='propiedad'  key={item.nombre}>{item.nombre} {t("cart.tabla.t4")}: {item.cantidad}</li>
                )
            }
        </ul>
    </td>
  )
}

export default DetalleUSBajaTension