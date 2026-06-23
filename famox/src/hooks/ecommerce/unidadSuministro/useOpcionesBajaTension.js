const useOpcionesBajatension = (valoresBajaTension , setValoresBajaTension) => {
    function obtenerCantidadInput(e, item){
        if(valoresBajaTension.length === 0){
            const valor = {
                nombre: item,
                cantidad: e.target.value
            }
            setValoresBajaTension([valor])
        } else{
            const coincidencia = valoresBajaTension.filter(
                valor => valor.nombre === item
            )
            if(coincidencia){
                const filtrado = valoresBajaTension.filter(
                    valor => valor.nombre !== item
                )

                const valor = {
                    nombre: item,
                    cantidad: parseInt(e.target.value)
                }
                setValoresBajaTension([...filtrado, valor])
                
            } else{
                const valor = {
                    nombre: item,
                    cantidad: e.target.value
                }
                setValoresBajaTension([
                    ...valoresBajaTension,
                    valor
                ])
            }
        }
    }
    
  return {
    obtenerCantidadInput
  }
}

export default useOpcionesBajatension;