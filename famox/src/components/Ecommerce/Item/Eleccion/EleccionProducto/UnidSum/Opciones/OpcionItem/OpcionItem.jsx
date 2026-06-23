import { useTranslation } from 'react-i18next'

function OpcionItem({item, obtenerCantidadInput}) {

  const {t} = useTranslation();

  return (
    <article className='opcion-item'>
        <p>{item}</p>
        <div>
            <p>{t("ecomm.steps.n")} </p>
            <input type="number" name="cantidad" placeholder='0' min={0} onChange={(e)=>obtenerCantidadInput(e, item)} />
        </div>
    </article>
  )
}

export default OpcionItem