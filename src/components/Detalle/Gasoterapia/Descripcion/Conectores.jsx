import CONECTORES from 'data/conectores';
import React from 'react';

function Conectores({product}) {

  return (
    <article className='conectores'>
        <h4>Conectores</h4>
        <div className='conec-info'>
            {
                product.map(
                    item => 
                    <div key={item}>
                        <h5>{item}</h5>
                        <img src={'/' + CONECTORES.filter(conec=> conec.nombre === item)[0].img} alt={item.nombre} />
                    </div>
                )
            }
        </div>
    </article>
  )
}

export default Conectores;
