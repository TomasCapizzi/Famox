import React, { useEffect, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos  } from "react-icons/md";
import { useTranslation } from "react-i18next"


function Carrusel() {

  const {t} = useTranslation();

  const images = [
    {src:`/img/Carrusel/1.webp`, class: 't-left bottom white', tr:'img1'},
    {src:'/img/Carrusel/2.webp', class: 't-right bottom white', tr:'img2'},
    {src:'/img/Carrusel/3.webp', class: 't-left top', tr:'img3'},
    {src:'/img/Carrusel/4.webp', class: 't-right bottom white', tr:'img4'},
    {src:'/img/Carrusel/5.webp', class: 't-left top', tr:'img5'},
    {src:'/img/Carrusel/6.webp', class: 't-left top white', tr:'img6'},
    {src:'/img/Carrusel/7.webp', class: 't-left bottom white', tr:'img7'},
    {src:'/img/Carrusel/8.webp', class: '', tr:'img8'},
    {src:'/img/Carrusel/9.webp', class:'', tr:'img9'}
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images, true);
      }, 5000);
      return () => clearInterval(interval);
  });

  const selectNewImage = (index, images, next) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      console.log(condition);
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images, true);
  };

    const goToSlide = (slideIndex) => {
      setSelectedImage(images[slideIndex]);
      setSelectedIndex(slideIndex);
    //setAutoPlay(false);
  };

  return (
    <>
      <div className='carrusel-container'>
        <img
          src={selectedImage.src}
          alt="Famox"
          className={loaded ? `loaded` : ""}
          onLoad={() => setLoaded(true)}
        />
        <div className={selectedImage.class}>
          <h1>{t(`carrusel.${selectedImage.tr}.title`)}</h1>
        </div>
        <div>
          <button className='leftArrowStyle' onClick={previous}><MdArrowBackIosNew/></button>
          <button className='rightArrowStyle' onClick={next}><MdArrowForwardIos/></button>
        </div>
      </div>
      <div className='dotsContainerStyles'>
          {images.map((slide, slideIndex) => (
            <div
              className={slideIndex === selectedIndex ? 'dotStyleOn':'dotStyleOff'}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
            ●
            </div>
            ))}
        </div>
    </>
  )
}

export default Carrusel;