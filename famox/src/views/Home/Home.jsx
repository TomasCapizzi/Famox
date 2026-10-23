/*import Carrusel from 'components/Home/Carrusel/Carrusel';*/
import CarruselMini from 'components/Home/Carrusel2/CarruselMini';
import Categorias from 'components/Home/Categorias';
import DescripcionTareas from 'components/Home/Descripcion/DescripcionTareas';
import {Helmet} from 'react-helmet-async';
import Hero from "components/Home/Hero";
import Soluciones from '../../components/Home/Soluciones/Soluciones';
import Fabricacion from '../../components/Home/Fabricacion/Fabricacion';
import Calidad from '../../components/Home/Calidad/Calidad';
import ObraDestacada from '../../components/Home/ObraDestacada/ObraDestacada';
import ContactoCTA from '../../components/Home/ContactoCTA';

function Home() {

  return (
  <div className='home'>
    <Helmet>
      <title>Famox-Inicio</title>
      <meta name="description" content="Famox es una empresa argentina moderna e innovadora, con mas de 20 años de experiencia en el ámbito hospitalario como fabricantes de productos médicos de alta calidad." />
    </Helmet>
    <Hero/>
    <Soluciones/>
    <Fabricacion/>
    <Calidad/>
    <ObraDestacada/>
    <CarruselMini/>
    <ContactoCTA/>
  </div>
  )
}

export default Home;