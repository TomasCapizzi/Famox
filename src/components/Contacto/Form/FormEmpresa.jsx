import React from 'react'

function FormEmpresa({validarEmpresa, empresaError}) {
  return (
    <div>
        <label htmlFor="">Empresa/Hospital*</label>
        <input type="text" id='empresa' name='empresa' required onChange={(e)=>validarEmpresa(e.target.value)} />
        <label htmlFor="empresa" className='error'>{empresaError}</label>
    </div>
  )
}

export default FormEmpresa