import React from 'react'

function FiltroItem({text, id}) {
  return (
    <div>
        <input type="checkbox" id={id} defaultChecked />
        <label htmlFor={id}>{text}</label>
    </div>
  )
}

export default FiltroItem