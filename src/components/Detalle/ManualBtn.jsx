import {BiDownload} from 'react-icons/bi';
import React from 'react';

function ManualBtn({product}) {
  return (
    product.manual !== '' &&
        <button className='manual-btn'>
            <a href={product.manual} target='_blank' rel='noreferrer'>Descargar manual <BiDownload/>
        </a>
    </button>
  )
}

export default ManualBtn