import './styles/main.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Accesorios from './components/ListaProductos/Accesorios/Accesorios';
import CrearProducto from './components/CrearProducto/CrearProducto';
import DetalleGasoterapia from './components/Detalle/Gasoterapia/DetalleGasoterapia';
import DetalleUnidSum from './components/Detalle/Unidades de Suministro/DetalleUnidSum';
import Footer from './components/Footer/Footer';
import Gasoterapia from './components/ListaProductos/Gasoterapia/Gasoterapia';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import React from 'react'
import UnidadesSuministro from './components/ListaProductos/UnidadesSuministro/UnidadesSuministro';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
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
  );
}

export default App;
