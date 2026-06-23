import Banner from 'components/CheckOut/Banner'
import {Helmet} from 'react-helmet-async';
import { useTranslation } from 'react-i18next';


function CheckOut() {

  const {t} = useTranslation();
  return (
    <section className='checkout'>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <Banner/>        
      <h3>{t("checkout.title")}</h3>
      <p>{t("checkout.txt")}</p>
    </section>
  )
}

export default CheckOut