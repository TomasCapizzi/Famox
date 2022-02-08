import React from 'react';

function Categoria({titulo, img, link}) {
  return (
    <div className='categoria'>
        <h3>{titulo}</h3>
        <a href={link}>
            <img src={img} alt="Categoria" />
        </a>
    </div>
  )
}

export default Categoria;
