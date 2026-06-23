const useResetValores = () => {

    function resetValores(e){
        e.target.nombre.value = ''
        e.target.mail.value = ''
        e.target.pais.value = ''
        e.target.asunto.value = ''
        e.target.empresa.value = ''
        e.target.mensaje.value = ''
      }
  return {
      resetValores
  }
}

export default useResetValores;