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
    //////// MODELOS ////////////////////////
    function mostrarModelos(ref){
        setOpcionesHandler(false);
        ref.current.classList.toggle('on')
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
    function mostrarLongitudPanel(ref){
        setOpcionesHandler(false);
        ref.current.classList.toggle('on');
    }

    //////// ACCESORIOS ////////////////////////
    function mostrarAccesorios(ref){
        setOpcionesHandler(false);
        ref.current.classList.toggle('on');
    }

    return {
    mostrarConectores,
    opcionesHandler,
    setOpcionesHandler,
    mostrarGases,
    mostrarRangos,
    mostrarModelos,
    mostrarMediaTension,
    mostrarBajaTension,
    mostrarIluminacion,
    mostrarConexionGases,
    mostrarLongitudPanel,
    mostrarAccesorios
    }
}

export default useMostrarOpciones;
