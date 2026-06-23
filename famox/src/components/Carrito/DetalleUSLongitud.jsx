import { useTranslation } from "react-i18next"

function DetalleUSLongitud({item}) {

  const {t} = useTranslation();

  return (
    <td className='filter'>
        <h5>{t("cart.tabla.t13")}</h5>
        <p>{item.longitud}</p>
    </td>
  )
}

export default DetalleUSLongitud