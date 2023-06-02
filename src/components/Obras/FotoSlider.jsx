import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import React, {useRef, useState} from 'react'

function FotoSlider({obra}) {

    const [actualImg, setActualImg] = useState(0);
    const totalImages = obra.img.length

    if(!Array.isArray(obra.img) || totalImages === 0) return;


    const moveLeft = ()=> {
        //sliderRef.current.scrollLeft += -firstImg.current.clientWidth
        setActualImg(actualImg === 0 ? totalImages -1  : actualImg - 1);
    }

    const moveRight = ()=> {
        //sliderRef.current.scrollLeft += firstImg.current.clientWidth
        setActualImg(actualImg === totalImages - 1 ? 0 : actualImg + 1);
    }

  return (
    <div className='slider-container'>
        {
            obra.img.length > 1 ? <BsArrowLeftCircle onClick={moveLeft} /> : null
        }

        {
            obra.img.map(
                (imgSrc, index) => {
                    return (
                        <div className={actualImg === index ? 'slider active' : 'slider'}>
                            {actualImg === index && (<img src={imgSrc} alt='slider' key={Math.floor(Math.random()*100)} />)}
                        </div>
                    );
                }
            )
        }
        {
            obra.img.length > 1 ? <BsArrowRightCircle onClick={moveRight} /> : null
        }
    </div>
  )
}

export default FotoSlider