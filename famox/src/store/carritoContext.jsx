import React, {createContext, useState} from 'react';
//import useCompararDia from 'hooks/store/useCompararDia';
/* eslint-disable react-refresh/only-export-components */


export const CarritoContext = createContext();

export function CarritoContextProvider({children}){  
      
    const [carro, setCarro] = useState([]);

    //const {compararDia} = useCompararDia()
    
    const agregarOAcumular = (producto, sonIguales) => {
        const carritoActual = JSON.parse(
            localStorage.getItem("FamoxCarrito") || "[]"
        );

        const indice = carritoActual.findIndex((item) =>
            sonIguales(item, producto)
        );

        let nuevoCarrito;

        if (indice === -1) {
            nuevoCarrito = [...carritoActual, producto];
        } else {
            nuevoCarrito = [...carritoActual];

            const existente = nuevoCarrito[indice];

            nuevoCarrito[indice] = {
            ...existente,
            cantidad:
                Number(existente.cantidad) +
                Number(producto.cantidad)
            };
        }

        localStorage.setItem(
            "FamoxCarrito",
            JSON.stringify(nuevoCarrito)
        );

        setCarro(nuevoCarrito);
    };



    const obtenerDataLocalStorage = () => {
    try {
        const datos = localStorage.getItem("FamoxCarrito");

        if (!datos) {
        setCarro([]);
        return;
        }

        const carritoGuardado = JSON.parse(datos);

        if (
        !Array.isArray(carritoGuardado) ||
        carritoGuardado.length === 0
        ) {
        setCarro([]);
        return;
        }

        const fechas = carritoGuardado
        .map((item) => new Date(item.fecha).getTime())
        .filter((fecha) => Number.isFinite(fecha));

        // Si algún artículo carece de fecha válida,
        // no podemos determinar su caducidad.
        if (fechas.length !== carritoGuardado.length) {
        localStorage.removeItem("FamoxCarrito");
        setCarro([]);
        return;
        }

        const fechaInicio = new Date(Math.min(...fechas));
        const ahora = new Date();

        const cincoHoras = 5 * 60 * 60 * 1000;

        const pasaronCincoHoras =
        ahora.getTime() - fechaInicio.getTime() >= cincoHoras;

        const cambioDeDia =
        ahora.toDateString() !== fechaInicio.toDateString();

        if (pasaronCincoHoras || cambioDeDia) {
        localStorage.removeItem("FamoxCarrito");
        setCarro([]);
        return;
        }

        setCarro(carritoGuardado);

    } catch (error) {
        console.error("Error al recuperar el carrito:", error);
        localStorage.removeItem("FamoxCarrito");
        setCarro([]);
    }
    };

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
    

    const agregarItemGasoterapia = ({ producto }) => {
        const sonIguales = (item, nuevo) => {
            // Evitar coincidencias con otras categorías
            if (
            item.accesorio ||
            item.equipoDigital ||
            Array.isArray(item.bajaTension)
            ) {
            return false;
            }

            // Debe ser el mismo producto
            if (item.nombre?.es !== nuevo.nombre?.es) {
            return false;
            }

            const codigoActual = String(item.codigo ?? "").trim();
            const codigoNuevo = String(nuevo.codigo ?? "").trim();

            // Si ambos tienen código, lo utilizamos
            if (codigoActual && codigoNuevo) {
            return codigoActual === codigoNuevo;
            }

            // Sin código, comparar toda la configuración
            return (
            item.gas === nuevo.gas &&
            item.conector === nuevo.conector &&
            item.rango === nuevo.rango &&
            JSON.stringify(item.modelo ?? null) ===
                JSON.stringify(nuevo.modelo ?? null)
            );
        };

        agregarOAcumular(producto, sonIguales);
    };



    const agregarItemUnidSum = ({ producto }) => {
    const normalizarOpciones = (opciones) => {
        return JSON.stringify(
        [...(opciones || [])]
            .map((opcion) => JSON.stringify(opcion))
            .sort()
        );
    };

    const sonIguales = (item, nuevo) => {
        // Solo comparar Unidades de Suministro
        if (!Array.isArray(item.bajaTension)) {
        return false;
        }

        if (item.nombre?.es !== nuevo.nombre?.es) {
        return false;
        }

        return (
        normalizarOpciones(item.bajaTension) ===
            normalizarOpciones(nuevo.bajaTension) &&

        normalizarOpciones(item.mediaTension) ===
            normalizarOpciones(nuevo.mediaTension) &&

        normalizarOpciones(item.iluminacion) ===
            normalizarOpciones(nuevo.iluminacion) &&

        normalizarOpciones(item.conexiones) ===
            normalizarOpciones(nuevo.conexiones) &&

        String(item.longitud ?? "") ===
            String(nuevo.longitud ?? "")
        );
    };

    agregarOAcumular(producto, sonIguales);
    };


    const agregarAccesorio = ({producto})=>{
        const carrito = JSON.parse(localStorage.getItem('FamoxCarrito'));
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


    const agregarEquipoDigital = ({ producto }) => {
        const sonIguales = (item, nuevo) => {
            if (item.equipoDigital !== true) {
            return false;
            }

            if (item.nombre?.es !== nuevo.nombre?.es) {
            return false;
            }

            const codigoActual = String(item.codigo ?? "").trim();
            const codigoNuevo = String(nuevo.codigo ?? "").trim();

            if (codigoActual && codigoNuevo) {
            return codigoActual === codigoNuevo;
            }

            return (
            JSON.stringify(item.modelo ?? null) ===
            JSON.stringify(nuevo.modelo ?? null)
            );
        };

    agregarOAcumular(producto, sonIguales);
    };

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
        <CarritoContext.Provider value={{carro, agregarItemGasoterapia,agregarItemUnidSum, removerItem, borrarCarrito, costoTotal, obtenerDataLocalStorage, agregarAccesorio, agregarEquipoDigital}}>
            {children}
        </CarritoContext.Provider>
    )
}
