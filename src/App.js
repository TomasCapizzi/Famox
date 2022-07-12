import './styles/main.scss';

import {BrowserRouter} from 'react-router-dom'
import { CarritoContextProvider } from 'store/carritoContext';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Menu/Menu';
import React from 'react'
import Rutas from 'components/Rutas/Rutas';

function App() {
  return (
    <CarritoContextProvider>
      <BrowserRouter>
        <div className="App">
          <Menu/>
          <Rutas/>
          <Footer/>
        </div>
      </BrowserRouter>
    </CarritoContextProvider>
  );
}

export default App;
