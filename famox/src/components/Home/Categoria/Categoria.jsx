import React from 'react';

function Categoria({titulo, img, link, isIntersecting}) {
  return (
    <div className={isIntersecting ? 'categoria on':'categoria off'}>
        <h3>{titulo}</h3>
        <a href={link}>
            <img src={img} alt="Categoria de producto" />
        </a>
    </div>
  )
}

export default Categoria;
