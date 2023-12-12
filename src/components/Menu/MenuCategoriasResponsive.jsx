import {Link} from 'react-router-dom';
import React from 'react';

function MenuCategoriasResponsive({useMenuHamb}) {
  return (
    <div className='categorias-handler'>
        <Link  to='/productos'><li onClick={useMenuHamb}>Productos</li></Link>
        <ul className='categorias'>
          <Link to='/gasoterapia'><li onClick={useMenuHamb}>Gasoterapia</li></Link>
          <Link to='/unidades-de-suministro'><li onClick={useMenuHamb}>Unidades de Suministro</li></Link>
          <Link to='/accesorios'><li onClick={useMenuHamb}>Accesorios</li></Link>
          <Link to='/equipos-digitales'><li onClick={useMenuHamb}>Equipos Digitales</li></Link>
        </ul>
    </div>
  )
}

export default MenuCategoriasResponsive