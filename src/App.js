import './styles/main.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Accesorios from './components/ListaProductos/Accesorios/Accesorios';
import Carrito from './components/Carrito/Carrito';
import { CarritoContextProvider } from './store/carritoContext';
import Certificaciones from './components/Certificaciones/Certificaciones';
import Contacto from './components/Contacto/Contacto';
import CrearProducto from './components/CrearProducto/CrearProducto';
import DetalleGasoterapia from './components/Detalle/Gasoterapia/DetalleGasoterapia';
import DetalleUnidSum from './components/Detalle/Unidades de Suministro/DetalleUnidSum';
import Ecommerce from './components/Ecommerce/Ecommerce';
import Footer from './components/Footer/Footer';
import Gasoterapia from './components/ListaProductos/Gasoterapia/Gasoterapia';
import Historia from './components/Historia/Historia';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Productos from './components/ListaProductos/Productos';
import React from 'react'
import UnidadesSuministro from './components/ListaProductos/UnidadesSuministro/UnidadesSuministro';

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
