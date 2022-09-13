const useNotificacion = () => {

    function mostrarNotificacion(refNoti){
        refNoti.current.classList.toggle('on');
        setTimeout(() => {
          refNoti.current.classList.toggle('on');
      }, 4000);
    }
  return {
    mostrarNotificacion
  }
}

export default useNotificacion