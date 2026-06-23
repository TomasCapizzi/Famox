const useEliminarSelecciones = (setModelo) => {

      function eliminarSeleccion(){
        setModelo();
      }
  return {
    eliminarSeleccion
  }
}

export default useEliminarSelecciones