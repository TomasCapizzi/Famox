import React, {createContext, useState} from 'react';
import useCompararDia from 'hooks/store/useCompararDia';

export const CarritoContext = createContext();

export function CarritoContextProvider({children}){  
      
    const [carro, setCarro] = useState([]);

    //const {compararDia} = useCompararDia()

    const obtenerDataLocalStorage = () => {
        const carrito = JSON.parse(localStorage.getItem('FamoxCarrito'))
        if(carrito){
            if(carrito.length){
                setCarro(carrito)
                // Creamos la fecha para poder borrar el carrito 5 hs desp o cualquier otro día que no sea el mismo del primer item agregado
                const diaInicioCarrito = carrito[0].fecha.split('T')[0]
                const horaInicioCarrito = carrito[0].fecha.split('T')[1]
    
                // Comparar Dia
                compararDia(diaInicioCarrito, horaInicioCarrito)
            }
        }      
    }
    const compararDia = (dia, hora)=> {
        const fechaActual = new Date()
        const mes = parseInt(dia.split('-')[1]);
        const nroDia = parseInt(dia.split('-')[2]);

        if(fechaActual.getDate() !== nroDia){
            borrarCarrito();
        } else if (fechaActual.getDate() === nroDia && fechaActual.getMonth() !== (mes - 1)){
            borrarCarrito();
        } else{
            // Comparar horario ya que el dia es el mismo
            compararHora(hora);
        }
    } 

    const compararHora = (hora)=> {
        //Comparamos las horas, como es UTC la hora es 3 veces mayor. Si la hora actual es igual o mayor a la hora UTC + 2 entonces borramos todo
        const fechaActual = new Date()
        const horaItem = parseInt(hora.split(':')[0]);
        if(fechaActual.getHours() >= (horaItem + 2)){
            borrarCarrito();
        }
    }
    
    
    const agregarItemGasoterapia = ({producto})=> {

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
                    fecha: new Date(),
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
                            fecha: new Date(),
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
                }
               // setCarro([...carro, producto]);

    }

    const agregarAccesorio = ({producto})=>{
        const carrito = JSON.parse(localStorage.getItem('FamoxCarrito'));
        console.log(producto);
        console.log(carrito);
        if(carrito){
            const coincidencia = carrito.find(
                item => (item.codigo === producto.codigo)
            );
            if(coincidencia){     
                console.log('Coinciden este elemento con otro igual');                    
                const nuevoCarrito = carrito.filter(
                        item=> item !== coincidencia
                    )
                const {nombre, img, _id, gas, codigo, accesorio} = producto
                let nuevoProducto = {
                    nombre,
                    fecha: new Date(),
                    img,
                    codigo,
                    accesorio,
                    _id,
                    gas,
                    cantidad: producto.cantidad
                }
                localStorage.setItem('FamoxCarrito', JSON.stringify([...nuevoCarrito, nuevoProducto]));
                setCarro([...nuevoCarrito, nuevoProducto])
            } else{
                localStorage.setItem('FamoxCarrito', JSON.stringify([...carrito, producto]));
                setCarro([...carrito, producto])
            }

        } else{
            localStorage.setItem('FamoxCarrito', JSON.stringify([producto]));
            setCarro([producto])
        }
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

    const costoTotal = carro.reduce((acc,{cantidad,precio}) => {
        return acc = acc + (precio*cantidad);
    },0);

    return(
        <CarritoContext.Provider value={{carro, agregarItemGasoterapia,agregarItemUnidSum, removerItem, borrarCarrito, costoTotal, obtenerDataLocalStorage, agregarAccesorio}}>
            {children}
        </CarritoContext.Provider>
    )
}
