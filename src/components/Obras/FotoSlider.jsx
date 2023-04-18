import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import React, {useRef} from 'react'

function FotoSlider({obra}) {

    const sliderRef = useRef();
    const firstImg = useRef();

    const moveLeft = ()=> {
        sliderRef.current.scrollLeft += -firstImg.current.clientWidth
    }

    const moveRight = ()=> {
        sliderRef.current.scrollLeft += firstImg.current.clientWidth
    }

  return (
    <div className='slider-container'>
        {
            obra.img.length > 1 ? <BsArrowLeftCircle onClick={moveLeft} /> : null
        }
        <div className='slider' ref={sliderRef} >
            {
                obra.img.map(
                    imgSrc => <img src={imgSrc} alt='slider' ref={firstImg} key={Math.floor(Math.random()*100)} />
                )
            }
        </div>
        {
            obra.img.length > 1 ? <BsArrowRightCircle onClick={moveRight} /> : null
        }
    </div>
  )
}

export default FotoSlider