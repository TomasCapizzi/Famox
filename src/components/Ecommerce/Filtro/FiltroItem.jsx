import React from 'react'

function FiltroItem({text, reference}) {
  return (
    <div>
        <input type="checkbox" ref={reference} defaultChecked />
        <label>{text}</label>
    </div>
  )
}

export default FiltroItem