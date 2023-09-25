const useMostrarCaracteristicas = () => {
    
    const mostrarCaracteristicas = (setHandlerInfo, handlerInfo, caractRef)=> {
        setHandlerInfo(!handlerInfo);
        caractRef.current.classList.toggle('on');
    }
  return {
    mostrarCaracteristicas
  }
}

export default useMostrarCaracteristicas;