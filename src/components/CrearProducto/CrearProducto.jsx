import React, {useEffect, useRef, useState} from 'react';

import FormAccesorio from './Forms/FormAccesorio';
import FormConector from './Forms/FormConector';
import FormFrasco from './Forms/FormFrasco';
import FormGasoterapia from './Forms/FormGasoterapia';
import FormUnidadSuministro from './Forms/FormUnidadSuministro';

function CrearProducto() {

    const [tipo, setTipo] = useState('');
    const [handler, setHandler] = useState(false)
    const selectRef = useRef()

    function confirmarTipo(){
        setTipo(selectRef.current.value);
        setHandler(true);
    }

    useEffect(()=>{

    },[tipo])

  return (
    <section className='crear-producto'>
        {
            handler ?
                <article className='form-container'>
                    {tipo === 'unidadsuministro' && <FormUnidadSuministro/>}
                    {tipo === 'gasoterapia' && <FormGasoterapia/>}
                    {tipo === 'frasco' && <FormFrasco/>}
                    {tipo === 'conector' && <FormConector/>}
                    {tipo === 'accesorio' && <FormAccesorio/>}
                </article>
            :  
            <div className='opciones'>
                <p>Elegir tipo de producto</p>
                <select name="" id="tipo-producto" ref={selectRef}>
                    <option value="gasoterapia">Gasoterapia</option>
                    <option value="unidadsuministro">Unidad Suministro</option>
                    <option value="frasco">Frasco</option>
                    <option value="conector">Conector</option>
                    <option value="accesorio">Accesorio</option>
                </select>
                <button onClick={()=> confirmarTipo()}>Confirmar</button>
            </div>
        }
    </section>
  )
}

export default CrearProducto;
