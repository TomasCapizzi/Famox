import './styles/main.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Accesorios from './views/Productos/Accesorios/Accesorios';
import Carrito from './components/Carrito/Carrito';
import { CarritoContextProvider } from './store/carritoContext';
import Certificaciones from './views/Certificaciones/Certificaciones';
import Contacto from './views/Contacto/Contacto';
import CrearProducto from './views/CrearProducto/CrearProducto';
import DetalleGasoterapia from './views/ProductoDetalle/DetalleGasoterapia';
import DetalleUnidSum from './views/ProductoDetalle/DetalleUnidSum';
import Ecommerce from './views/Ecommerce/Ecommerce';
import Footer from './components/Footer/Footer';
import Gasoterapia from './views/Productos/Gasoterapia/Gasoterapia';
import Historia from './views/Nosotros/Historia';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Menu from './components/Menu/Menu';
import PregFrec from './views/PregFrec/PregFrec';
import Productos from './views/Productos/Productos';
import React from 'react'
import UnidadesSuministro from './views/Productos/UnidadesSuministro/UnidadesSuministro';

function App() {
  return (
    <CarritoContextProvider>
      <BrowserRouter>
        <div className="App">
          <Menu/>
          <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/nosotros' element={<Historia/>} />
            <Route path='/certificaciones' element={<Certificaciones/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/ecommerce' element={<Ecommerce/>} />
            <Route path='/carrito' element={<Carrito/>} />
            <Route path='/preguntas-frecuentes' element={<PregFrec/>} />

            <Route path='/gasoterapia' element={<Gasoterapia/>}/>
            <Route path='/unidades-de-suministro' element={<UnidadesSuministro/>}/>
            <Route path='/accesorios' element={<Accesorios/>}/>

            <Route path='/unidades-de-suministro/:id' element={<DetalleUnidSum/>} />
            <Route path='/gasoterapia/:id' element={<DetalleGasoterapia/>} />

            <Route path='/crear-producto' element={<CrearProducto/>} />

          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CarritoContextProvider>
  );
}

export default App;
