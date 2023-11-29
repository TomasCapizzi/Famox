import {Link} from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md';
import React from 'react';

function MenuCategorias() {
  return (
    <div className='categorias-handler'>
        <Link  to='/productos'><li>Productos <MdKeyboardArrowDown/></li></Link>
        <div className='categorias'>
          <Link to='/gasoterapia'><li>Gasoterapia</li></Link>
          <Link to='/unidades-de-suministro'><li>Unidades de Suministro</li></Link>
          <Link to='/accesorios'><li>Accesorios</li></Link>
          <Link to='/equipos-digitales'><li>Equipos Digitales</li></Link>
        </div>
    </div>
  )
}

export default MenuCategorias