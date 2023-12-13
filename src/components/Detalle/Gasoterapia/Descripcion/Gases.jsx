import GASES from 'data/gases';
import React from 'react';

function Gases({product}) {

//    const [img, setImg] = useState()
    return (

        <article className='gases'>
            <h4>Gases Disponibles</h4>
            <div>
                {product &&
                    product.map(
                        item => <img src={'/'+ GASES.filter(gas => gas.nombre === item)[0].img} alt={item} key={item} />
                    )
                }
                
            </div>
        </article>    
    )
}

export default Gases;
