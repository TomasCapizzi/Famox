import { CarritoContext } from 'store/carritoContext';
import { useContext } from "react";

const useAgregarAccesorio = ({item}) => {
    const {carro, agregarAccesorio} = useContext(CarritoContext);
    //const [gas, setGas] = useState();

    function agregarAlCarrito(acc){
        const coincidencia = carro.find(
            prod => prod.codigo === acc.codigo
        )
        if(coincidencia){
            console.log('Coincidencia: ', coincidencia.cantidad, acc.cantidad);
            // Si poseen el mismo codigo:
            const producto = {
                nombre: acc.nombre,
                fecha: new Date(),
                codigo: acc.codigo,
                accesorio: true,
                gas: acc.gas ? acc.gas.toUpperCase() : null,
                img: acc.img,
                cantidad: acc.cantidad + coincidencia.cantidad,
                _id: Math.random().toString(36).split('.')[1]
            }
            console.log(producto);
            agregarAccesorio({producto})
        } else{
            const producto = {
                nombre: acc.nombre,
                fecha: new Date(),
                codigo: acc.codigo,
                accesorio: true,
                gas: acc.gas ? acc.gas.toUpperCase() : null,
                img: acc.img,
                cantidad: acc.cantidad,
                _id: Math.random().toString(36).split('.')[1]
            }
            agregarAccesorio({producto})
        }
    }
    function agregarAlCarritoUS(acc, cantidad){
        const coincidencia = carro.find(
            prod => prod.codigo === acc.codigo
        )
        if(coincidencia){
            console.log('Coincidencia: ', coincidencia.cantidad, acc.cantidad);
            // Si poseen el mismo codigo:
            const producto = {
                nombre: acc.nombre,
                fecha: new Date(),
                codigo: acc.codigo,
                accesorio: true,
                img: acc.img,
                cantidad: acc.cantidad + cantidad,
                _id: Math.random().toString(36).split('.')[1]
            }
            console.log(producto);
            agregarAccesorio({producto})
        } else{
            const producto = {
                nombre: acc.nombre,
                fecha: new Date(),
                codigo: acc.codigo,
                accesorio: true,
                img: acc.img,
                cantidad,
                _id: Math.random().toString(36).split('.')[1]
            }
            agregarAccesorio({producto})
        }
    }


    return{
        agregarAlCarrito,
        agregarAlCarritoUS
    }
}

export default useAgregarAccesorio;