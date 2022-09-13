const useRandomKey = ()=> {
    function getRandomKey(){
        return Math.random().toString(36).split('.')[1]
    }
  return {
    getRandomKey
  }
}

export default useRandomKey;