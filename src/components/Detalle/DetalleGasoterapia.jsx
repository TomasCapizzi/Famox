import React from 'react';
import {useParams} from 'react-router-dom';

function DetalleGasoterapia() {

    const {id} = useParams()
    console.log(id);

    async function getItem(){
        const response = await fetch()
    }

  return(
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default DetalleGasoterapia;
