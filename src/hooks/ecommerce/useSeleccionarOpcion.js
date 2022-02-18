import {useState} from 'react'

const useSeleccionarOpcion = () => {

    const [opcionesHandler, setOpcionesHandler] = useState(false);

    function mostrarConectores(ref){
        setOpcionesHandler(false)
        ref.current.classList.toggle('on');
    } 
    function mostrarGases(ref){
        setOpcionesHandler(false)
        ref.current.classList.toggle('on');

    }

    return {
    mostrarConectores,
    opcionesHandler,
    setOpcionesHandler,
    mostrarGases
    }
}

export default useSeleccionarOpcion;
