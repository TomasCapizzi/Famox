import React from 'react';

function Conectores({product}) {

    const {conector} = product
  return (
    <article className='conectores'>
        <h4>Conectores</h4>
        <div className='conec-info'>
            {
                conector.diss && 
                <div>
                    <h5>DISS</h5>
                    <img src={'/img/Conectores/PAG-DISS.png'} alt="diss" />
                </div>
            }
            {
                conector.afnor && 
                    <div>
                        <h5>AFNOR</h5>
                        <img src={'/img/Conectores/PAG-AFNOR.png'} alt="afnor" />
                    </div>
            }
            {
                conector.ss_aga &&
                    <div>
                        <h5>SS/AGA</h5>
                        <img src={'/img/Conectores/PAG-SSAGA.png'} alt="ss_aga" />
                    </div>
            }
            {
                conector.ohmeda && 
                    <div>
                        <h5>OHMEDA</h5>
                        <img src={'/img/Conectores/PAG-OHMEDA.png'} alt="ohmeda" />
                    </div>
            }
            {
                conector.on && 
                    <div>
                        <h5>ON</h5>
                        <img src={'/img/Conectores/PAG-ON.png'} alt="on" />
                    </div>
            }
            {
                conector.iram &&
                    <div>
                        <h5>IRAM</h5>
                        <img src={'/img/Conectores/IRAM.png'} alt="iram" />
                    </div>
            }
            {
                conector.yugo && 
                    <div>
                        <h5>YUGO</h5>
                        <img src={'/img/Conectores/YUGO.png'} alt="yugo" />
                    </div>
            }
        </div>
    </article>
  )
}

export default Conectores;
