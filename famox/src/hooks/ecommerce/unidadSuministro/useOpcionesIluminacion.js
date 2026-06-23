const useOpcionesIluminacion = (setValoresIluminacion, valoresIluminacion) => {
    function obtenerCantidadInput(e, item){
        if(valoresIluminacion.length === 0){
            const valor = {
                    nombre: item,
                    cantidad: e.target.value
            }
            setValoresIluminacion([valor])
        } else{
            const coincidencia = valoresIluminacion.filter(
                valor => valor.nombre === item
            )
            if(coincidencia){
                const filtrado = valoresIluminacion.filter(
                    valor => valor.nombre !== item
                )
        
                const valor = {
                    nombre: item,
                    cantidad: parseInt(e.target.value)
                }
                setValoresIluminacion([...filtrado, valor])
                
            } else{
                const valor = {
                    nombre: item,
                    cantidad: e.target.value
                }
                setValoresIluminacion([
                    ...valoresIluminacion,
                    valor
                ])
            }
        }
        }
  return {
    obtenerCantidadInput
  }
}

export default useOpcionesIluminacion