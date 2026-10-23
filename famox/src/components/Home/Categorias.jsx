
import Categoria from "./Categoria/Categoria";
import { useTranslation } from "react-i18next";

function Categorias() {
  const { t } = useTranslation();

  const categorias = [
    {
      key: "a",
      img: "/img/Categorias/unidades-suministro.webp",
      link: "/unidades-de-suministro",
    },
    {
      key: "b",
      img: "/img/Categorias/gasoterapia2.webp",
      link: "/gasoterapia",
    },
    {
      key: "c",
      img: "/img/Categorias/accesorios2.webp",
      link: "/accesorios",
    },
    {
      key: "d",
      img: "/img/Categorias/equipos-digitales.webp",
      link: "/equipos-digitales",
    },
  ];

  return (
    <div className="categorias-container">
      {categorias.map((categoria) => (
        <Categoria
          key={categoria.key}
          titulo={t(`home.categorias.${categoria.key}`)}
          img={categoria.img}
          link={categoria.link}
        />
      ))}
    </div>
  );
}

export default Categorias;
