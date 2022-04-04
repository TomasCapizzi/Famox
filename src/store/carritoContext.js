import React, {createContext, useState} from 'react';

export const CarritoContext = createContext();

export function CarritoContextProvider({children}){  
      
    const [carro, setCarro] = useState([]);

    const obtenerDataLocalStorage = () => {
        const carrito = JSON.parse(localStorage.getItem('FamoxCarrito'))
        //console.log(carrito);
        if(carrito){
            setCarro(carrito)
            borrarDataLocalStorage();
        }      
    }
    
    const agregarItemGasoterapia = ({producto})=> {
        console.log(producto);
        const carrito = JSON.parse(localStorage.getItem('FamoxCarrito'));
        if(carrito){
            const coincidencia = carrito.find(
                item => (item.nombre === producto.nombre) && (item.codigo === producto.codigo)
                /*
                item => (item.nombre === producto.nombre) && (item.gas === producto.gas) && (item.conector === producto.conector) && (item.rango === producto.rango)*/
            );
            if(coincidencia){     
                console.log('Coinciden este elemento con otro igual');                      
               const nuevoCarrito = carrito.filter(
                    item=> item !== coincidencia
                )
                //console.log('NUEVO CARRITO' ,nuevoCarrito);
                const {nombre, img, _id, gas, conector, rango, modelo, codigo} = producto
                let nuevoProducto = {
                    nombre,
                    img,
                    codigo,
                    _id,
                    conector,
                    gas,
                    rango,
                    modelo,
                    cantidad: producto.cantidad + coincidencia.cantidad
                }
                localStorage.setItem('FamoxCarrito', JSON.stringify([...nuevoCarrito, nuevoProducto]));
                setCarro([...nuevoCarrito, nuevoProducto])
            } else{
                localStorage.setItem('FamoxCarrito', JSON.stringify([...carrito, producto]));
                setCarro([...carro, producto])
            }

        } else{
            localStorage.setItem('FamoxCarrito', JSON.stringify([producto]));
            setCarro([producto])
            borrarDataLocalStorage()
        }
       // setCarro([...carro, producto]);

    }

    const agregarItemUnidSum = ({producto})=> {
                //console.log(producto);
                const carrito = JSON.parse(localStorage.getItem('FamoxCarrito'));
                if(carrito){
                    const coincidencia = carrito.find(
                        item => item === producto
                    );
                    if(coincidencia){                    
                       const nuevoCarrito = carrito.filter(
                            item=> item !== coincidencia
                        )
                        const {nombre, img, _id, bajaTension, mediaTension, iluminacion, conexiones} = producto
                        let nuevoProducto = {
                            nombre,
                            img,
                            _id,
                            mediaTension,
                            bajaTension,
                            iluminacion,
                            conexiones,
                            cantidad: producto.cantidad + coincidencia.cantidad
                        }
                        localStorage.setItem('FamoxCarrito', JSON.stringify([...nuevoCarrito, nuevoProducto]));
                        setCarro([...nuevoCarrito, nuevoProducto])
                    } else{
                        localStorage.setItem('FamoxCarrito', JSON.stringify([...carrito, producto]));
                        setCarro([...carro, producto])
                    }
        
                } else{
                    localStorage.setItem('FamoxCarrito', JSON.stringify([producto]));
                    setCarro([producto])
                    borrarDataLocalStorage()
                }
               // setCarro([...carro, producto]);

    }

    const removerItem = (producto)=>{
        localStorage.setItem('FamoxCarrito', JSON.stringify(carro.filter(
            item => item._id !== producto._id
        )))
        let itemRemovido = carro.filter(item => item._id !== producto._id);
        setCarro(itemRemovido)
    }
    const borrarCarrito = ()=> {
        setCarro([]);
        localStorage.removeItem('FamoxCarrito');
    }

    const borrarDataLocalStorage = ()=> {
        setTimeout(()=> {
            borrarCarrito()
        }, 7400000)
    }

    const costoTotal = carro.reduce((acc,{cantidad,precio}) => {
        return acc = acc + (precio*cantidad);
    },0);

    return(
        <CarritoContext.Provider value={{carro, agregarItemGasoterapia,agregarItemUnidSum, removerItem, borrarCarrito, costoTotal, obtenerDataLocalStorage}}>
            {children}
        </CarritoContext.Provider>
    )
}
