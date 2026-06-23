import React from 'react'
import { useTranslation } from 'react-i18next';

function BotomComprar({accesorios, setAccesorios, agregarAlCarrito}) {
  const {t} = useTranslation();
  const comprar = ()=>{
    accesorios.forEach(acc => agregarAlCarrito(acc, accesorios,setAccesorios));
    setAccesorios([])
  }
  return (
      accesorios.length ? <button className='acc-btn-comprar' onClick={comprar}>{t("ecomm.steps.c")}</button> : null    
  )
}

export default BotomComprar