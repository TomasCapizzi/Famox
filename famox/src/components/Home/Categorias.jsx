import Categoria from './Categoria/Categoria'
import useIntersection from 'hooks/intersectionObserver/useIntersection'
import { useTranslation } from 'react-i18next';

function Categorias() {
  const {t} = useTranslation();
  const {isIntersecting, elementRef} = useIntersection();
  return (
    <div className='categorias-container' ref={elementRef}>
        <Categoria titulo={t("home.categorias.a")} img='img/Categorias/unidadesSuministro.webp' link='/unidades-de-suministro' isIntersecting={isIntersecting}/>
        <Categoria titulo={t("home.categorias.b")} img='img/Categorias/gasoterapia.webp' link='/gasoterapia' isIntersecting={isIntersecting}/>
        <Categoria titulo={t("home.categorias.c")} img='img/Categorias/accesorios.webp' link='accesorios' isIntersecting={isIntersecting}/>
        <Categoria titulo={t("home.categorias.d")} img='img/Categorias/llamadores.webp' link='/equipos-digitales' isIntersecting={isIntersecting}/>
    </div>
  )
}

export default Categorias