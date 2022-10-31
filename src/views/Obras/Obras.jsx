import React,{useEffect, useState} from 'react'

import Obra from 'components/Obras/Obra';

function Obras() {

    const [obras, setObras] = useState([])

    const getObras = async ()=> {
        const response = await fetch('http://famox-env.eba-8tvz54ez.sa-east-1.elasticbeanstalk.com/api/products/obras');
        const res = await response.json();
        setObras(res.products);
        console.log(res.products);
    }
    useEffect(()=>{
        getObras();
    },[])

  return (
    <div className='obras-pagina'>
        <h1>Obras</h1>
        <section className='obras-container'>
            {
                obras.length > 0 ?
                    obras.map(
                        obra => <Obra key={obra._id} obra={obra}/>
                    )
                : null
            }
        </section>
    </div>
  )
}

export default Obras