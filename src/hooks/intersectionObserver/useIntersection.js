import { useEffect, useRef, useState } from "react";

const useIntersection = (opciones = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
      const elemento = elementRef.current;
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setIsIntersecting(entry.isIntersecting))
      }, opciones)
      if(elemento){
        observer.observe(elemento)
      }

      return () => {
        if(elemento){
            observer.unobserve(elemento)
        }
      }
      
    }, []);

  return {
    isIntersecting,
    elementRef
  }
}

export default useIntersection