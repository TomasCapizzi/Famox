import { useTranslation } from "react-i18next"

function DetalleUSConexiones({item}) {

  const {t} = useTranslation();

  return (
    <td className='filter'>
        <h5>{t("cart.tabla.t7")}</h5>
        <ul>
            {
                item.conexiones.map(
                    item => 
                        <li className='propiedad'  key={item.conector + item.gas}>{item.conector}+{item.gas} {t("cart.tabla.t4")}: {item.cantidad}</li>
                )
            }
        </ul>
    </td>
  )
}

export default DetalleUSConexiones