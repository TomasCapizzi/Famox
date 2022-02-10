import React from 'react';

function Gases({product}) {

    const {gases} = product
    return (
        <article className='gases'>
            <h4>Gases Disponibles</h4>
            <div>
                {
                    gases.aire && <img src={'/img/Gases/Aire.png'} alt="aire" />
                }
                {
                    gases.co2 && <img src={'/img/Gases/CO2.png'} alt='co2' /> 
                }
                {
                    gases.n2 && <img src={'/img/Gases/N2.png'} alt='n2' /> 
                }
                {
                    gases.n2o && <img src={'/img/Gases/N2O.png'} alt='n2o' /> 
                }
                {
                    gases.oxigeno && <img src={'/img/Gases/Oxigeno.png'} alt='oxigeno' /> 
                }
                {
                    gases.oxigeno_aire && <img src={'/img/Gases/Aire_Variable.png'} alt='oxigeno/aire' /> 
                }
                {
                    gases.vacio && <img src={'/img/Gases/Vacio.png'} alt='vacio' /> 
                }
            </div>
        </article>    
    )
}

export default Gases;
