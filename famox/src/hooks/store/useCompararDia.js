import { useContext } from 'react';
import { CarritoContext } from 'store/carritoContext';

const useCompararDia = () => {

    const {borrarCarrito} = useContext(CarritoContext);

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

    return {
        compararDia,
    }

}

export default useCompararDia