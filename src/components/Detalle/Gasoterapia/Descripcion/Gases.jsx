import React, {useState} from 'react';

import GASES from 'data/gases';

function Gases({product}) {

    const [img, setImg] = useState()

    return (
        <article className='gases'>
            <h4>Gases Disponibles</h4>
            <div>
                {
                    product.map(
                        item => <img src={'/'+ GASES.filter(gas => gas.nombre === item)[0].img} alt={item} key={item} />
                    )
                }
                
            </div>
        </article>    
    )
}

export default Gases;
