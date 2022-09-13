const useEnviarConsulta = () => {
    function generarConsulta(consulta){
        const request = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(consulta), 
        }

        return request;
    }
  return {
    generarConsulta
  }
}

export default useEnviarConsulta;