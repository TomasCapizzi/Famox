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
  return {
    longitudPanelCabecera,
    controlarUnidadMedida
  }
}

export default useLongitudPanel