import React, {createContext, useState} from 'react';

export const CarritoContext = createContext();

export function CarritoContextProvider({children}){    
    const [carro, setCarro] = useState([]);

    
    const agregarItem = ({producto})=> {
        console.log(producto);
        setCarro([...carro, producto]);
    }
    const removerItem = (producto)=>{
        let itemRemovido = carro.filter(item => item._id !== producto._id);
        setCarro(itemRemovido)
    }
    const borrarCarrito = ()=> setCarro([]);

    const costoTotal = carro.reduce((acc,{cantidad,precio}) => {
        return acc = acc + (precio*cantidad);
    },0);

    return(
        <CarritoContext.Provider value={{carro, agregarItem, removerItem, borrarCarrito, costoTotal}}>
            {children}
        </CarritoContext.Provider>
    )
}
