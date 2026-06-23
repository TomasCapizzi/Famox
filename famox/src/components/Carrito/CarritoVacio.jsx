import { useTranslation } from "react-i18next"

function CarritoVacio() {

  const {t} = useTranslation();

  return (
    <section className='carro-vacio'>
        <h5>{t("cart.t1")}</h5>
        <p>{t("cart.t2")}</p>
    </section>
    )
}

export default CarritoVacio