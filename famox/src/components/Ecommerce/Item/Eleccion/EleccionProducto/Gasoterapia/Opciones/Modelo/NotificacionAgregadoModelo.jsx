import { useTranslation } from 'react-i18next'

function NotificacionAgregadoModelo({refNotificacionModelo}) {
  const {t} = useTranslation();
  return (
    <div className='notificacion' ref={refNotificacionModelo}>
        <p>{t("ecomm.steps.p")}</p>
    </div>
  )
}

export default NotificacionAgregadoModelo