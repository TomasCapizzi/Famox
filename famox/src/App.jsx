
import {BrowserRouter} from 'react-router-dom'
import { CarritoContextProvider } from './store/carritoContext';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Rutas from './components/Rutas/Rutas';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
    <CarritoContextProvider>
      <BrowserRouter>
        <div className="App">
          <Menu/>
          <Rutas/>
          <Footer/>
        </div>
      </BrowserRouter>
    </CarritoContextProvider>
    </HelmetProvider>
  );
}

export default App;
