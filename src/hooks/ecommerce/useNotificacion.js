const useNotificacion = () => {
    const activarNoti = (refNoti)=> {
        refNoti.current.classList.toggle('noti-on')
        setTimeout(()=>{
          refNoti.current.classList.toggle('noti-on')
        }, 2000)
      }

  return {
    activarNoti
  }
}

export default useNotificacion