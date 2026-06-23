import {TiDelete} from 'react-icons/ti';
import { useTranslation } from 'react-i18next';

function Longitud({longitudPanel, eliminarItem}) {

  const {t} = useTranslation()

  return (
    <div className='seleccion-unidSum-longitud'>
        <p>{t("ecomm.steps.g")} {longitudPanel}</p>
        <TiDelete onClick={eliminarItem}/>
    </div>
  )
}

export default Longitud