import React from 'react'
import DetalleUSBajaTension from './DetalleUSBajaTension'
import DetalleUSMediaTension from './DetalleUSMediaTension'
import DetalleUSIluminacion from './DetalleUSIluminacion'
import DetalleUSConexiones from './DetalleUSConexiones'
import DetalleUSLongitud from './DetalleUSLongitud'

function DetallesUnidSum({item, caractRef}) {
  return (
    <tr className='caracteristicas' ref={caractRef} >
        {
            item.bajaTension.length >=1 && <DetalleUSBajaTension item={item}/>
        }
        {
            item.mediaTension.length >=1 && <DetalleUSMediaTension item={item}/>

        }
        {
            item.iluminacion.length >=1 && <DetalleUSIluminacion item={item}/>
        }
        {
            item.conexiones.length >=1 && <DetalleUSConexiones item={item}/>
        }
        {
            item.longitud && <DetalleUSLongitud item={item}/>
        }
    </tr> 
  )
}

export default DetallesUnidSum