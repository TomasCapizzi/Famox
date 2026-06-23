import React from 'react'
import { GoArrowLeft } from "react-icons/go";

function Volver({link}) {
  return (
    <a className='btnVolver' href={link}>
        <GoArrowLeft />
    </a>
  )
}

export default Volver