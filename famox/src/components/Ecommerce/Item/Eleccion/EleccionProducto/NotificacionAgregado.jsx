
import { useTranslation } from 'react-i18next'

function NotificacionAgregado({refNoti}) {
  const {t} = useTranslation();

  return (
    <div className='notificacion' ref={refNoti}>
        <p>{t("ecomm.steps.e")}</p>
    </div>
  )
}

export default NotificacionAgregado