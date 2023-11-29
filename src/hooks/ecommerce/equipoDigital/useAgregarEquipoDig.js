import { CarritoContext } from 'store/carritoContext';
import { useContext, useState } from "react";

const useAgregarEquipoDig = ({item}) => {
    const {carro, agregarEquipoDigital} = useContext(CarritoContext);
    const [modelo, setModelo] = useState();
    //const {derivarFuncion} = useCodigo(item.nombre, modelo) //Esta función regresa el código de los prod de gasoterapia

    function agregarAlCarrito(cantidad){
        buscarCoincidenciaModelo(cantidad);
    }

    function buscarCoincidenciaModelo(cantidad){
        const {nombre, img} = item
        let coincidencia = undefined;
        // Hacer comparación x codigo
        if(modelo.codigo){
          coincidencia = carro.find(
            producto => producto.codigo === modelo.codigo
          ) 
        } else{
          coincidencia = carro.find(
            producto => producto.modelo.nombre === modelo.nombre
          )
        }      
        if(coincidencia){
          // Si coincide genero un nuevo item con la misma data pero otro ID y lo mando al context
          const nuevoID = Math.random().toString(36).split('.')[1];
          const producto = {
            nombre,
            fecha: new Date(),
            codigo: modelo.codigo,
            img,
            equipoDigital: true,
            cantidad,
            modelo,
            _id: nuevoID
          }
          console.log(producto);
          agregarEquipoDigital({producto})
        } else {
          const producto = {
            nombre,
            fecha: new Date(),
            codigo: modelo.codigo,
            img,
            cantidad,
            modelo,
            _id: Math.random().toString(36).split('.')[1]
          }
          agregarEquipoDigital({producto})
        }
      }
/*
    function agregarACarrito(equipo){
        const coincidencia = carro.find(
            prod => prod.codigo === equipo.codigo
        )
        if(coincidencia){
            // Si poseen el mismo codigo:
            const producto = {
                nombre: equipo.nombre,
                fecha: new Date(),
                codigo: equipo.codigo,
                equipoDigital: true,
                img: equipo.img,
                cantidad: equipo.cantidad + coincidencia.cantidad,
                _id: Math.random().toString(36).split('.')[1]
            }
            agregarEquipoDigital({producto})
        } else{
            const producto = {
                nombre: equipo.nombre,
                fecha: new Date(),
                codigo: equipo.codigo,
                equipoDigital: true,
                img: equipo.img,
                cantidad: equipo.cantidad,
                _id: Math.random().toString(36).split('.')[1]
            }
            agregarEquipoDigital({producto})
        }
    }*/


    return{
        agregarAlCarrito,
        setModelo,
        modelo
    }
}

export default useAgregarEquipoDig;