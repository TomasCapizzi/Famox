
const useFiltro = () => {
    function filtrar(e, setGasoterapiaHandler, setUnidSumHandler, setHandler){
        e.preventDefault();        
        // Tipos de producto
        const gasoterapia = e.target.gasoterapia.checked;
        const unidadesSuministro = e.target.unidsuministro.checked;
        // Busqueda de Gasoterapia
        if(gasoterapia === true && unidadesSuministro === false){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(true)
                setUnidSumHandler(false)
                setHandler(true)
            },800)
        }
        // Búsqueda de Unidades de Suministro
        else if(gasoterapia === false && unidadesSuministro === true){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(false)
                setUnidSumHandler(true)
                setHandler(true)
            },800)
        }
        // Búsqueda de ambos
        else if(gasoterapia === true && unidadesSuministro === true){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(true)
                setUnidSumHandler(true)
                setHandler(true)
            },800)
        }
        // Busqueda nula
        else{
            console.log('No hay categorias seleccionadas');
        }
    }
    function reset(setGasoterapiaHandler, setUnidSumHandler, setHandler){
        setHandler(false)
        setTimeout(()=>{
            setGasoterapiaHandler(true)
            setUnidSumHandler(true)
            setHandler(true)
        },800)
    }
  return {
    filtrar,
    reset
  }
}

export default useFiltro