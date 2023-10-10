const useOpcionesGasConec = (conexiones, setConexiones, mostrarConexion, conectorRef, gasRef,cantidadRef) => {
    function verificarItemConexion(conexion){
        const duplicado = conexiones.find(item => item.gas === conexion.gas && item.conector === conexion.conector)
        if(duplicado){
          const modificarConexiones = conexiones.filter(
            item => item !== duplicado
          )
          const {conector, gas, cantidad} = conexion
          const nuevo = {
            conector,
            gas,
            cantidad: cantidad + duplicado.cantidad
          }
          setConexiones([
            ...modificarConexiones,
            nuevo
          ])
        } else{
          setConexiones([
            ...conexiones,
            conexion
          ])
          mostrarConexion();
        }
    
      }
      function agregarConexion(){
        if(conectorRef.current.value !== '' && gasRef.current.value !== '' && cantidadRef.current.value !== '' ){
          const conexion = {
            conector : conectorRef.current.value,
            gas : gasRef.current.value,
            cantidad : parseInt(cantidadRef.current.value)
          }
          verificarItemConexion(conexion);
        }
      }
  return {
    verificarItemConexion,
    agregarConexion
  }
}

export default useOpcionesGasConec