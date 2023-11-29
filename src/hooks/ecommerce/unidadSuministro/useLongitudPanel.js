const useLongitudPanel = (medidasRef, setLongitudPanel, setHandlerInput) => {
    function longitudPanelCabecera(e){
        if(medidasRef.current.value !== 'default'){
            setLongitudPanel(`${e.target.value} ${medidasRef.current.value}`)
        }      
        }
    function controlarUnidadMedida(){
        if(medidasRef.current.value === 'default'){
            setHandlerInput(true)
        } else {
            setHandlerInput(false)
        }
    }
    function resetValores(longitudRef){
        medidasRef.current.value = 'default';
        longitudRef.current.value = null;
    }

  return {
    longitudPanelCabecera,
    controlarUnidadMedida,
    resetValores
  }
}

export default useLongitudPanel