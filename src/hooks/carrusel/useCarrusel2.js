const useCarrusel2 = (contenidoRef, containerRef) => {
    function mover(valor){
        // Track
        const anchoContenido = contenidoRef.current.offsetWidth;
        // List
        const anchoContainer = containerRef.current.offsetWidth;  

        let leftPosition;

        contenidoRef.current.style.left === '' ? leftPosition = contenidoRef.current.style.left = 0 : leftPosition = parseFloat(contenidoRef.current.style.left.slice(0,-2)*-1)

        if(leftPosition < (anchoContenido - anchoContainer) && valor === 2){
            contenidoRef.current.style.left = `${-1 * (leftPosition + contenidoRef.current.childNodes[1].offsetWidth )}px`
        } else if(leftPosition > 0 && valor === 1){
            contenidoRef.current.style.left = `${-1 * (leftPosition - contenidoRef.current.childNodes[1].offsetWidth )}px`
        }
    }
  return {
    mover
  }
}

export default useCarrusel2