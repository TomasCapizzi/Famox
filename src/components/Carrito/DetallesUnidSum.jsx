import React from 'react'

function DetallesUnidSum({item, caractRef}) {
  return (
    <tr className='caracteristicas' ref={caractRef} >
        {
            item.bajaTension.length >=1 &&       
            <td className='filter'>
                <h5>Baja Tension</h5>
                <ul>
                    {
                        item.bajaTension.map(
                            item => 
                                <li className='propiedad'  key={item.nombre}>{item.nombre} Cantidad: {item.cantidad}</li>
                        )
                    }
                </ul>

            </td>
        }
        {
            item.mediaTension.length >=1 && 
            <td className='filter'>
                <h5>Media Tension</h5>
                <ul>
                    {
                        item.mediaTension.map(
                            item => 
                                <li className='propiedad'  key={item.nombre}>{item.nombre} Cantidad: {item.cantidad}</li>
                        )
                    }
                </ul>

            </td>
        }
        {
            item.iluminacion.length >=1 &&
            <td className='filter'>
                <h5>Iluminación</h5>
                <ul>
                    {
                        item.iluminacion.map(
                            item =>
                                <li className='propiedad'  key={item.nombre}>{item.nombre} Cantidad: {item.cantidad}</li>
                        )
                    }
                </ul>
            </td>
        }
        {
            item.conexiones.length >=1 &&
            <td className='filter'>
                <h5>Conexiones</h5>
                <ul>
                    {
                        item.conexiones.map(
                            item => 
                                <li className='propiedad'  key={item.conector + item.gas}>{item.conector}+{item.gas} Cantidad: {item.cantidad}</li>
                        )
                    }
                </ul>
            </td>
        }
                {
            item.longitud &&
            <td className='filter'>
                <h5>Longitud</h5>
                <p>{item.longitud}</p>
            </td>
        }
    </tr> 
  )
}

export default DetallesUnidSum