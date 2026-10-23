import {Route, Routes} from 'react-router-dom'
import { Navigate } from "react-router-dom";
import Accesorios from 'views/Productos/Accesorios/Accesorios';
import Carrito from 'views/Carrito/Carrito';
import Certificaciones from 'views/Certificaciones/Certificaciones';
import CheckOut from 'views/CheckOut/CheckOut';
import Contacto from 'views/Contacto/Contacto';
import DetalleGasoterapia from 'views/ProductoDetalle/DetalleGasoterapia';
import DetalleUnidSum from 'views/ProductoDetalle/DetalleUnidSum';
import Ecommerce from 'views/Ecommerce/Ecommerce';
import Gasoterapia from 'views/Productos/Gasoterapia/Gasoterapia';
import Historia from 'views/Nosotros/Historia';
import Home from 'views/Home/Home';
import EquiposDigitales from 'views/Productos/EquiposDigitales/EquiposDigitales';
import Obras from 'views/Obras/Obras';
import PregFrec from 'views/PregFrec/PregFrec';
import Productos from 'views/Productos/Productos';
import React from 'react';
import UnidadesSuministro from 'views/Productos/UnidadesSuministro/UnidadesSuministro';
import ObraDetalle from "views/ObraDetalle/ObraDetalle";

function Rutas() {
  return (
    <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/nosotros' element={<Historia/>} />
            <Route path='/certificaciones' element={<Certificaciones/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path="/tienda" element={<Ecommerce />} />
            <Route
              path="/ecommerce"
              element={<Navigate to="/tienda" replace />}
            />
            <Route path='/obras' element={<Obras/>} />
            <Route path='/carrito' element={<Carrito/>} />
            <Route path='/preguntas-frecuentes' element={<PregFrec/>} />

            <Route path='/gasoterapia' element={<Gasoterapia/>}/>
            <Route path='/unidades-de-suministro' element={<UnidadesSuministro/>}/>
            <Route path='/accesorios' element={<Accesorios/>}/>
            <Route path='/equipos-digitales' element={<EquiposDigitales/>}/>

            <Route
              path="/obras/swiss-medical-nordelta"
              element={<ObraDetalle />}
            />
            <Route
              path="/obras/:slug"
              element={<ObraDetalle />}
            />

            <Route path='/unidades-de-suministro/:id' element={<DetalleUnidSum/>} />
            <Route path='/gasoterapia/:id' element={<DetalleGasoterapia/>} />

            <Route path='/checkout' element={<CheckOut/>} />
          </Routes>
  )
}

export default Rutas