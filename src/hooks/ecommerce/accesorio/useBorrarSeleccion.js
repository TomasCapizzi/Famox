const useBorrarSeleccion = (setAccesorios, accesorios)=> {
    function eliminarSeleccion(codigo){
        setAccesorios(accesorios.filter(item => item.codigo !== codigo))
      }
  return {
    eliminarSeleccion
  }
}

export default useBorrarSeleccion