const useOpcionesUS = (valores, setValores) => {
    function obtenerCantidadInput(e, item){
        if(valores.length === 0){
            const valor = {
                    nombre: item,
                    cantidad: e.target.value
            }
            setValores([valor])
        } else{
            const coincidencia = valores.filter(
                valor => valor.nombre === item
            )
            if(coincidencia){
                const filtrado = valores.filter(
                    valor => valor.nombre !== item
                )
        
                const valor = {
                    nombre: item,
                    cantidad: parseInt(e.target.value)
                }
                setValores([...filtrado, valor])
                
            } else{
                const valor = {
                    nombre: item,
                    cantidad: e.target.value
                }
                setValores([
                    ...valores,
                    valor
                ])
            }
        }
        }
    return {
        obtenerCantidadInput
    }
}

export default useOpcionesUS