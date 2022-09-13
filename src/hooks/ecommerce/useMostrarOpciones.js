import {useState} from 'react'

const useMostrarOpciones = () => {

    const [opcionesHandler, setOpcionesHandler] = useState(false);

    //////// GASOTERAPIA ////////////////////////
    function mostrarConectores(ref){
        setOpcionesHandler(false)
        ref.current.classList.toggle('on');
    } 
    function mostrarGases(ref){
        setOpcionesHandler(false)
        ref.current.classList.toggle('on');
    }
    function mostrarRangos(ref){
        setOpcionesHandler(false);
        ref.current.classList.toggle('on');
    }

    //////// UNID SUM ////////////////////////
    function mostrarMediaTension(ref){
        setOpcionesHandler(false);
        ref.current.classList.toggle('on');
    }
    function mostrarBajaTension(ref){
        setOpcionesHandler(false);
        ref.current.classList.toggle('on');
    }
    function mostrarIluminacion(ref){
        setOpcionesHandler(false);
        ref.current.classList.toggle('on');
    }
    function mostrarConexionGases(ref){
        setOpcionesHandler(false);
        ref.current.classList.toggle('on');
    }

    return {
    mostrarConectores,
    opcionesHandler,
    setOpcionesHandler,
    mostrarGases,
    mostrarRangos,
    mostrarMediaTension,
    mostrarBajaTension,
    mostrarIluminacion,
    mostrarConexionGases
    }
}

export default useMostrarOpciones;
