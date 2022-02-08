import React, {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

function DetalleUnidSum() {
    const {id} = useParams()
    console.log(id);

    const [product, setProduct] = useState([]);

    const api = 'https://famox-api.herokuapp.com/api/products/unidades-suministro/'

    async function getItem(){
        const response = await fetch(api + id);
        const res = await response.json()
        console.log(res);
    }

    useEffect(()=>{
        getItem();
    },[])
  return(
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default DetalleUnidSum;
