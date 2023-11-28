//import GASES from 'data/gases';
import React from 'react';
import {TiDelete} from 'react-icons/ti';

function SeleccionItem({acc, eliminarSeleccion}) {
  /*
  const gasImg = acc.gas? GASES.filter(
    gas => gas.nombre === acc.gas.toUpperCase()
  ) : null*/
  return (
    <div className='seleccion-item'>
      {/*<img src={acc.img} alt="accesorio" />*/}
      <p className='acc-codigo'>{acc.codigo}</p>
      <p>{acc.nombre.split('M2')[1]}</p>
      {/*<img src={gasImg[0].img} alt="gas" className='img-gas' />*/}
      <p>Cantidad: {acc.cantidad}</p>
      <button onClick={()=>eliminarSeleccion(acc.codigo)}><TiDelete/></button>
      {/* Aca igualar Gas con GASES para la img del gas */}
    </div>
  )
}

export default SeleccionItem