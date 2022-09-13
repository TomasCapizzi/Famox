import {Link} from 'react-router-dom';
import React from 'react';

function MenuCategoriasResponsive({useMenuHamb}) {
  return (
    <div className='categorias-handler'>
        <Link  to='/productos'><li onClick={useMenuHamb}>Productos</li></Link>
        <div className='categorias'>
        <Link to='/gasoterapia'><li onClick={useMenuHamb}>Gasoterapia</li></Link>
        <Link to='/unidades-de-suministro'><li onClick={useMenuHamb}>Unidades de Suministro</li></Link>
        <Link to='/accesorios'><li onClick={useMenuHamb}>Accesorios</li></Link>
        </div>
    </div>
  )
}

export default MenuCategoriasResponsive