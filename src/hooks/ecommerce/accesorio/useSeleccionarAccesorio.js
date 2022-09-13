const useSeleccionarAccesorio = (setAccesorios, accesorios) => {
    function seleccionAccesorio(acc){
        if(accesorios.length){
          const accesorioDuplicado = accesorios.filter(
            item => (item.nombre === acc.nombre) && (item.gas === acc.gas)
          )
          if(accesorioDuplicado.length){
            const accesoriosFiltrados = accesorios.filter(
              item => (item.nombre !== acc.nombre) || ((item.nombre === acc.nombre) && (item.gas !== acc.gas))
            )
            setAccesorios([...accesoriosFiltrados, acc])
          }
          else{
            setAccesorios([...accesorios, acc])
          }
        } else{
          setAccesorios([acc])
        }
      }
  return {
    seleccionAccesorio
  }
}

export default useSeleccionarAccesorio