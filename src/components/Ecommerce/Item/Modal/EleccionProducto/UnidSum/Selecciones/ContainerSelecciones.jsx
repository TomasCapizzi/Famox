import Conexiones from './Conexiones';
import React from 'react';
import Selecciones from './Selecciones';
import Tabla from 'components/Ecommerce/Item/Modal/EleccionProducto/UnidSum/Selecciones/Tabla';
import TablaConexion from 'components/Ecommerce/Item/Modal/EleccionProducto/UnidSum/Selecciones/TablaConexion';

function ContainerSelecciones({conexiones, eliminarItem, valoresBajaTension, valoresIluminacion, valoresMediaTension}) {
    
  return (
    <div className='selecciones-container'>
        {
        conexiones.length >= 1 ?
        <>
            <p>Conexiones</p>
            <table className='seleccion-conex'>
            <TablaConexion/>
            <Conexiones conexiones={conexiones} eliminarItem={eliminarItem} />
            </table>
        </>

        : null
        }
        {
        valoresMediaTension.length >= 1 ?
        <>
            <p>Media Tension</p>
            <table className='seleccion'>
            <Tabla/>
            <Selecciones valores={valoresMediaTension} eliminarItem={eliminarItem} />
            </table>
        </>

            : null
        }
        {
        valoresBajaTension.length >= 1 ?
        <>
            <p>Baja Tension</p>
            <table className='seleccion'>                    
            <Tabla/>
            <Selecciones valores={valoresBajaTension} eliminarItem={eliminarItem} />
            </table>
        </>
            : null
        }
        {
        valoresIluminacion.length >= 1 ?
        <>
            <p>Iluminación</p>
            <table className='seleccion'>
            <Tabla/>
            <Selecciones valores={valoresIluminacion} eliminarItem={eliminarItem} />
            </table>
        </>                
            : null
        }
    </div>
  )
}

export default ContainerSelecciones