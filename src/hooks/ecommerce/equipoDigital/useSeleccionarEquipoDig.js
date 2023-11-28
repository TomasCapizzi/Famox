const useSeleccionarEquipoDig = (setEquiposDigitales, equiposDigitales) => {
    function seleccionEquipoDigital(equipoDig){
        if(equiposDigitales.length){
          const accesorioDuplicado = equiposDigitales.filter(
            item => (item.nombre === equipoDig.nombre) && (item.gas === equipoDig.gas)
          )
          if(accesorioDuplicado.length){
            const equiposDigitalesFiltrados = equiposDigitales.filter(
              item => (item.nombre !== equipoDig.nombre) || ((item.nombre === equipoDig.nombre) && (item.gas !== equipoDig.gas))
            )
            setEquiposDigitales([...equiposDigitalesFiltrados, equipoDig])
          }
          else{
            setEquiposDigitales([...equiposDigitales, equipoDig])
          }
        } else{
            setEquiposDigitales([equipoDig])
        }
      }
  return {
    seleccionEquipoDigital
  }
}

export default useSeleccionarEquipoDig