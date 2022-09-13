const useEliminarSelecciones = (setConector, setGas, setRango, setModelo) => {
    function eliminarSeleccionConector(){
        setConector();
      }
      function eliminarSeleccionGas(){
        setGas();
      }
      function eliminarSeleccionRango(){
        setRango();
      }
      function eliminarSeleccionModelo(){
        setModelo();
      }
  return {
    eliminarSeleccionConector, eliminarSeleccionGas, eliminarSeleccionModelo, eliminarSeleccionRango
  }
}

export default useEliminarSelecciones