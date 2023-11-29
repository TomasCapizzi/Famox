
const useFiltro = () => {
    function filtrar(e, setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler, filtroGasoterapiaRef, filtroUnidSumRef, filtroAccesoriosRef, filtroEquiposDigRef){
        e.preventDefault();        
        // Tipos de producto
        const gasoterapia = filtroGasoterapiaRef.current.checked;
        const unidadesSuministro = filtroUnidSumRef.current.checked;
        const accesorios = filtroAccesoriosRef.current.checked;
        const equiposDig = filtroEquiposDigRef.current.checked;

        setAccesoriosHandler(false);
        setEquiposDigitalesHandler(false);
        setGasoterapiaHandler(false);
        setUnidSumHandler(false);

        if(gasoterapia){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(true)
                setHandler(true)
            },800)
        }
        if(unidadesSuministro){
            setHandler(false)
            setTimeout(()=>{
                setUnidSumHandler(true)
                setHandler(true)
            },800)
        }
        if(accesorios){
            setHandler(false)
            setTimeout(()=>{
                setAccesoriosHandler(true)
                setHandler(true)
            },800)
        }
        if(equiposDig){
            setHandler(false)
            setTimeout(()=>{
                setEquiposDigitalesHandler(true)
                setHandler(true)
            },800)
        }
    }
    
    function reset(setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setEquiposDigitalesHandler, setHandler){
        setHandler(false)
        setTimeout(()=>{
            setGasoterapiaHandler(true)
            setUnidSumHandler(true)
            setAccesoriosHandler(true)
            setEquiposDigitalesHandler(true);
            setHandler(true)
        },800)
    }
  return {
    filtrar,
    reset
  }
}

export default useFiltro