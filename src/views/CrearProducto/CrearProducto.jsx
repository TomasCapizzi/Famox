import React, {useEffect, useRef, useState} from 'react';

import FormAccesorio from '../../components/CrearProducto/Forms/FormAccesorio';
import FormGasoterapia from '../../components/CrearProducto/Forms/FormGasoterapia';
import FormModelo from '../../components/CrearProducto/Forms/FormModelo';
import FormUnidadSuministro from '../../components/CrearProducto/Forms/FormUnidadSuministro';

function CrearProducto() {

    const [tipo, setTipo] = useState('');
    const [handler, setHandler] = useState(false);
    const [handlerKey, setHandlerKey] = useState(false);

    const selectRef = useRef();
    const key = 'Famox2371'

    function habilitarKey(e){
        e.preventDefault()
        if(e.target.key.value === key){
            setHandlerKey(true)
        }else{
            console.log('Key equivocada');
        }
    }

    function confirmarTipo(){
        setTipo(selectRef.current.value);
        setHandler(true);
    }

    useEffect(()=>{

    },[tipo])

  return (
    <section className='crear-producto'>
        {
            handlerKey ? 
                handler ?
                    <article className='form-container'>
                        {tipo === 'unidadsuministro' && <FormUnidadSuministro setHandler={setHandler} />}
                        {tipo === 'gasoterapia' && <FormGasoterapia setHandler={setHandler}/>}
                        {tipo === 'modelo' && <FormModelo setHandler={setHandler}/>}
                        {tipo === 'accesorio' && <FormAccesorio setHandler={setHandler}/>}
                    </article>
                :  
                <div className='opciones'>
                    <p>Elegir tipo de producto</p>
                    <select name="" id="tipo-producto" ref={selectRef}>
                        <option value="gasoterapia">Gasoterapia</option>
                        <option value="unidadsuministro">Unidad Suministro</option>
                        <option value="modelo">Modelo</option>
                        <option value="accesorio">Accesorio</option>
                    </select>
                    <button onClick={()=> confirmarTipo()}>Confirmar</button>
                </div> : 
            <form onSubmit={(e)=>habilitarKey(e)}>
                <h5>Coloca la clave para acceder</h5>
                <input type='password' id='key'/>
                <button>Acceder</button>
            </form>
        }
    </section>
  )
}

export default CrearProducto;
