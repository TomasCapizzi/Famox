
const useFiltro = () => {
    function filtrar(e, setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setHandler){
        e.preventDefault();        
        // Tipos de producto
        const gasoterapia = e.target.gasoterapia.checked;
        const unidadesSuministro = e.target.unidsuministro.checked;
        const accesorios = e.target.accesorios.checked
        // Busqueda de Gasoterapia
        if(gasoterapia === true && unidadesSuministro === false && accesorios === false ){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(true)
                setUnidSumHandler(false)
                setAccesoriosHandler(false)
                setHandler(true)
            },800)
        }
        // Búsqueda de Unidades de Suministro
        else if(gasoterapia === false && unidadesSuministro === true && accesorios === false){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(false)
                setUnidSumHandler(true)
                setAccesoriosHandler(false)
                setHandler(true)
            },800)
        }
        // Búsqueda de Accesorios
        else if(gasoterapia === false && unidadesSuministro === false && accesorios === true){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(false)
                setUnidSumHandler(false)
                setAccesoriosHandler(true)
                setHandler(true)
            },800)
        }
        // Búsqueda de dos categorías
        else if(gasoterapia === true && unidadesSuministro === true && accesorios === false){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(true)
                setUnidSumHandler(true)
                setAccesoriosHandler(false)
                setHandler(true)
            },800)
        }
        else if(gasoterapia === true && unidadesSuministro === false && accesorios === true){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(true)
                setUnidSumHandler(false)
                setAccesoriosHandler(true)
                setHandler(true)
            },800)
        }
        else if(gasoterapia === false && unidadesSuministro === true && accesorios === true){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(false)
                setUnidSumHandler(true)
                setAccesoriosHandler(true)
                setHandler(true)
            },800)
        }
        else if(gasoterapia === true && unidadesSuministro === true && accesorios === true){
            setHandler(false)
            setTimeout(()=>{
                setGasoterapiaHandler(true)
                setUnidSumHandler(true)
                setAccesoriosHandler(true)
                setHandler(true)
            },800)
        }
        // Busqueda nula
        else{
            console.log('No hay categorias seleccionadas');
        }
    }
    function reset(setGasoterapiaHandler, setUnidSumHandler, setAccesoriosHandler, setHandler){
        setHandler(false)
        setTimeout(()=>{
            setGasoterapiaHandler(true)
            setUnidSumHandler(true)
            setAccesoriosHandler(true)
            setHandler(true)
        },800)
    }
  return {
    filtrar,
    reset
  }
}

export default useFiltro