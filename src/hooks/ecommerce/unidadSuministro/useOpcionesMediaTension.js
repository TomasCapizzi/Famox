const useOpcionesMediaTension = (setValoresMediaTension, valoresMediaTension)=> {
    function obtenerCantidadInput(e, item){
        if(valoresMediaTension.length === 0){
            const valor = {
                nombre: item,
                cantidad: e.target.value
            }
            setValoresMediaTension([valor])
        } else{
            const coincidencia = valoresMediaTension.filter(
                valor => valor.nombre === item
            )
            if(coincidencia){
                const filtrado = valoresMediaTension.filter(
                    valor => valor.nombre !== item
                )

                const valor = {
                    nombre: item,
                    cantidad: parseInt(e.target.value)
                }
                setValoresMediaTension([...filtrado, valor])
                
            } else{
                const valor = {
                    nombre: item,
                    cantidad: e.target.value
                }
                setValoresMediaTension([
                    ...valoresMediaTension,
                    valor
                ])
            }
        }
    }
    return {
        obtenerCantidadInput
    }
}

export default useOpcionesMediaTension;