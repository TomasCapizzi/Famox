
const useFetchLocalStorage = () => {
    const obtenerDataLocalStorage = (setCarro,compararDia) => {
        const carrito = JSON.parse(localStorage.getItem('FamoxCarrito'))
        if(carrito){
            if(carrito.length){
                setCarro(carrito)
                // Creamos la fecha para poder borrar el carrito 5 hs desp o cualquier otro día que no sea el mismo del primer item agregado
                const diaInicioCarrito = carrito[0].fecha.split('T')[0]
                const horaInicioCarrito = carrito[0].fecha.split('T')[1]
    
                // Comparar Dia
                compararDia(diaInicioCarrito, horaInicioCarrito)
            }
        }      
    }
  return {
    obtenerDataLocalStorage
  }
}

export default useFetchLocalStorage