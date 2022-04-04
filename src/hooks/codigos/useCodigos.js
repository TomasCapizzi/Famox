import {useState} from "react";

const useCodigo = (nombre, gas, conector, rango, modelo)=> {
    const [codigo, setCodigo] = useState();

    function derivarFuncion(){
       // const {nombre, gas, conector, rango, modelo} = producto

        
        if(nombre === 'Caudalímetro'){
            return buscarCodigoCaudalimetro(gas, conector, rango)            
        } else if( nombre === 'Aspirador Venturi' ){
            return buscarCodigoAspiradorVenturi(gas, conector)
        } else if(nombre === 'Llave de Vacío' ){
            return buscarCodigoLlaveVacio(conector, modelo.nombre)
        } else if(nombre === 'Regulador de Baja Presión' ){
            return buscarCodigoReguladorBaja(gas, conector)
        } else if(nombre === 'Regulador de Vacío' ){
            return buscarCodigoReguladorVacio(conector, rango)
        } else if(nombre === 'Humidificador' ){
            return buscarCodigoHumidificador(gas)
        } else if(nombre === 'Regulador de Presión Ajustable' ){
            return buscarCodigoReguladorAjustable(gas, conector)
        } else if(nombre === 'Regulador de Presión Pre-Ajustado' ){
            return buscarCodigoReguladorPreajustado(gas, conector)
        } else if(nombre === 'Regulador de Presión Pre-Ajustado con Caudalímetro'){
            return buscarCodigoReguladorPreajustadoCaudalimetro(gas, conector, rango)
        } else if(nombre === 'Recipiente Colector' || nombre === 'Mezclador de Aire/Oxígeno'){
            return buscarCodigoDeModelo(modelo)
        } else if(nombre === 'Máscara Nasal'){
            return buscarCodigoMascaraNasal(modelo.nombre)
        }
    }

    // CAUDALIMETRO
    const buscarCodigoCaudalimetro = (gas, conector, rango)=> {

        // Conector: DISS
        if(gas === 'OXÍGENO' && conector === 'DISS' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA002')
            return 'PCA002'
        }
        if(gas === 'OXÍGENO' && conector === 'DISS' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA014')
            return 'PCA014'
        }
        if(gas === 'OXÍGENO' && conector === 'DISS' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA149')
            return 'PCA149'
        }
        if(gas === 'OXÍGENO' && conector === 'DISS' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA151')
            return 'PCA151'
        }
        if(gas === 'AIRE' && conector === 'DISS' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA008')
            return 'PCA008'
        }
        if(gas === 'AIRE' && conector === 'DISS' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA020')
            return 'PCA020'
        }
        if(gas === 'AIRE' && conector === 'DISS' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA150')
            return 'PCA150'
        }
        if(gas === 'AIRE' && conector === 'DISS' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA152')
            return 'PCA152'
        }
        // Conector: AFNOR
        if(gas === 'OXÍGENO' && conector === 'AFNOR' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA026')
            return 'PCA026'
        }
        if(gas === 'OXÍGENO' && conector === 'AFNOR' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA038')
            return 'PCA038'
        }
        if(gas === 'OXÍGENO' && conector === 'AFNOR' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA153')
            return 'PCA153'
        }
        if(gas === 'OXÍGENO' && conector === 'AFNOR' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA155')
            return 'PCA155'
        }
        if(gas === 'AIRE' && conector === 'AFNOR' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA032')
            return 'PCA032'
        }
        if(gas === 'AIRE' && conector === 'AFNOR' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA044')
            return 'PCA044'
        }
        if(gas === 'AIRE' && conector === 'AFNOR' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA154')
            return 'PCA154'
        }
        if(gas === 'AIRE' && conector === 'AFNOR' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA156')
            return 'PCA156'
        }
        // Conector: SS/AGA
        if(gas === 'OXÍGENO' && conector === 'SS/AGA' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA050')
            return 'PCA050'
        }
        if(gas === 'OXÍGENO' && conector === 'SS/AGA' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA062')
            return 'PCA062'
        }
        if(gas === 'OXÍGENO' && conector === 'SS/AGA' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA157')
            return 'PCA157'
        }
        if(gas === 'OXÍGENO' && conector === 'SS/AGA' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA159')
            return 'PCA159'
        }
        if(gas === 'AIRE' && conector === 'SS/AGA' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA056')
            return 'PCA056'
        }
        if(gas === 'AIRE' && conector === 'SS/AGA' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA068')
            return 'PCA068'
        }
        if(gas === 'AIRE' && conector === 'SS/AGA' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA158')
            return 'PCA158'
        }
        if(gas === 'AIRE' && conector === 'SS/AGA' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA160')
            return 'PCA160'
        }
        // Conector: OHMEDA
        if(gas === 'OXÍGENO' && conector === 'OHMEDA' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA074')
            return 'PCA074'
        }
        if(gas === 'OXÍGENO' && conector === 'OHMEDA' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA086')
            return 'PCA086'
        }
        if(gas === 'OXÍGENO' && conector === 'OHMEDA' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA161')
            return 'PCA161'
        }
        if(gas === 'OXÍGENO' && conector === 'OHMEDA' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA163')
            return 'PCA163'
        }
        if(gas === 'AIRE' && conector === 'OHMEDA' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA080')
            return 'PCA080'
        }
        if(gas === 'AIRE' && conector === 'OHMEDA' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA092')
            return 'PCA092'
        }
        if(gas === 'AIRE' && conector === 'OHMEDA' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA162')
            return 'PCA162'
        }
        if(gas === 'AIRE' && conector === 'OHMEDA' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA164')
            return 'PCA164'
        }
        // Conector: ON
        if(gas === 'OXÍGENO' && conector === 'ON' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA098')
            return 'PCA098'
        }
        if(gas === 'OXÍGENO' && conector === 'ON' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA110')
            return 'PCA110'
        }
        if(gas === 'OXÍGENO' && conector === 'ON' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA165')
            return 'PCA165'
        }
        if(gas === 'OXÍGENO' && conector === 'ON' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA167')
            return 'PCA167'
        }
        if(gas === 'AIRE' && conector === 'ON' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA104')
            return 'PCA104'
        }
        if(gas === 'AIRE' && conector === 'ON' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA116')
            return 'PCA116'
        }
        if(gas === 'AIRE' && conector === 'ON' && rango === '0-30 L/MIN' ){
            //setCodigo('PCA166')
            return 'PCA166'
        }
        if(gas === 'AIRE' && conector === 'ON' && rango === '0-70 L/MIN' ){
            //setCodigo('PCA168')
            return 'PCA168'
        }

    }

    // REGULADOR DE BAJA
    const buscarCodigoReguladorBaja = (gas, conector)=> {
        // Conector: DISS
        if(gas === 'OXÍGENO' && conector === 'DISS'){
            //setCodigo('PRB001')
            return 'PRB001'
        }
        if(gas === 'AIRE' && conector === 'DISS'){
            //setCodigo('PRB002')
            return 'PRB002'
        }
        if(gas === 'N2O' && conector === 'DISS'){
            //setCodigo('PRB003')
            return 'PRB003'
        }
        if(gas === 'N2' && conector === 'DISS'){
            //setCodigo('PRB004')
            return 'PRB004'
        }
        if(gas === 'CO2' && conector === 'DISS'){
            //setCodigo('PRB005')
            return 'PRB005'
        }

        // Conector: AFNOR
        if(gas === 'OXÍGENO' && conector === 'AFNOR'){
            //setCodigo('PRB006')
            return 'PRB006'
        }
        if(gas === 'AIRE' && conector === 'AFNOR'){
            //setCodigo('PRB007')
            return 'PRB007'
        }
        if(gas === 'N2O' && conector === 'AFNOR'){
            //setCodigo('PRB008')
            return 'PRB008'
        }
        if(gas === 'N2' && conector === 'AFNOR'){
            //setCodigo('PRB009')
            return 'PRB009'
        }
        if(gas === 'CO2' && conector === 'AFNOR'){
            //setCodigo('PRB010')
            return 'PRB010'
        }
        // Conector: SS/AGA
        if(gas === 'OXÍGENO' && conector === 'SS/AGA'){
            //setCodigo('PRB011')
            return 'PRB011'
        }
        if(gas === 'AIRE' && conector === 'SS/AGA'){
            //setCodigo('PRB012')
            return 'PRB012'
        }
        if(gas === 'N2O' && conector === 'SS/AGA'){
            //setCodigo('PRB013')
            return 'PRB013'
        }
        if(gas === 'N2' && conector === 'SS/AGA'){
            //setCodigo('PRB014')
            return 'PRB014'
        }
        if(gas === 'CO2' && conector === 'SS/AGA'){
            //setCodigo('PRB015')
            return 'PRB015'
        }
        // Conector: OHMEDA
        if(gas === 'OXÍGENO' && conector === 'OHMEDA'){
            //setCodigo('PRB016')
            return 'PRB016'
        }
        if(gas === 'AIRE' && conector === 'OHMEDA'){
            //setCodigo('PRB017')
            return 'PRB017'
        }
        if(gas === 'N2O' && conector === 'OHMEDA'){
            //setCodigo('PRB018')
            return 'PRB018'
        }
        if(gas === 'N2' && conector === 'OHMEDA'){
            //setCodigo('')
            return ''
        }
        if(gas === 'CO2' && conector === 'OHMEDA'){
            //setCodigo('PRB019')
            return 'PRB019'
        }
        // Conector: ON
        if(gas === 'OXÍGENO' && conector === 'DISS'){
            //setCodigo('PRB020')
            return 'PRB020'
        }
        if(gas === 'AIRE' && conector === 'DISS'){
            //setCodigo('PRB021')
            return 'PRB021'
        }
        if(gas === 'N2O' && conector === 'DISS'){
            //setCodigo('PRB022')
            return 'PRB022'
        }
        if(gas === 'N2' && conector === 'DISS'){
            //setCodigo('')
            return ''
        }
        if(gas === 'CO2' && conector === 'DISS'){
            //setCodigo('')
            return ''
        }
    }

    // LLAVE DE VACIO
    const buscarCodigoLlaveVacio = (conector, modelo)=> {
        //Conector: DISS
        if(conector === 'DISS' && modelo === 'Con Vacuómetro'){
            //setCodigo('PLV002')
            return 'PLV002'
        }
        if(conector === 'DISS' && modelo === 'Sin Vacuómetro'){
            //setCodigo('PLV001')
            return 'PLV001'
        }

        //Conector: AFNOR
        if(conector === 'AFNOR' && modelo === 'Con Vacuómetro'){
            //setCodigo('PLV004')
            return 'PLV004'
        }
        if(conector === 'AFNOR' && modelo === 'Sin Vacuómetro'){
            //setCodigo('PLV003')
            return 'PLV003'
        }

        //Conector: SS/AGA
        if(conector === 'SS/AGA' && modelo === 'Con Vacuómetro'){
            //setCodigo('PLV006')
            return 'PLV006'
        }
        if(conector === 'SS/AGA' && modelo === 'Sin Vacuómetro'){
            //setCodigo('PLV005')
            return 'PLV005'
        }
        //Conector: OHMEDA
        if(conector === 'OHMEDA' && modelo === 'Con Vacuómetro'){
            //setCodigo('PLV008')
            return 'PLV008'
        }
        if(conector === 'OHMEDA' && modelo === 'Sin Vacuómetro'){
            //setCodigo('PLV007')
            return 'PLV007'
        }
        //Conector: ON
        if(conector === 'ON' && modelo === 'Con Vacuómetro'){
            //setCodigo('PLV010')
            return 'PLV010'
        }
        if(conector === 'ON' && modelo === 'Sin Vacuómetro'){
            //setCodigo('PLV009')
            return 'PLV009'
        }
    }

    // REGULADOR DE VACIO
    const buscarCodigoReguladorVacio = (conector, rango)=> {
        //Conector: DISS
        if(conector === 'DISS' && rango === '-60 KPA' ){
            //setCodigo('PRV001')
            return 'PRV001'
        }
        if(conector === 'DISS' && rango === '-20 KPA' ){
            //setCodigo('PRV006')
            return 'PRV006'
        }
        //Conector: AFNOR
        if(conector === 'AFNOR' && rango === '-60 KPA' ){
            //setCodigo('PRV002')
            return 'PRV002'
        }
        if(conector === 'AFNOR' && rango === '-20 KPA' ){
            //setCodigo('PRV007')
            return 'PRV007'
        }
        //Conector: SS/AGA
        if(conector === 'SS/AGA' && rango === '-60 KPA' ){
            //setCodigo('PRV003')
            return 'PRV003'
        }
        if(conector === 'SS/AGA' && rango === '-20 KPA' ){
            //setCodigo('PRV008')
            return 'PRV008'
        }
        //Conector: OHMEDA
        if(conector === 'OHMEDA' && rango === '-60 KPA' ){
            //setCodigo('PRV004')
            return 'PRV004'
        }
        if(conector === 'OHMEDA' && rango === '-20 KPA' ){
            //setCodigo('PRV009')
            return 'PRV009'
        }
        //Conector: ON
        if(conector === 'ON' && rango === '-60 KPA' ){
            //setCodigo('PRV005')
            return 'PRV005'
        }
        if(conector === 'ON' && rango === '-20 KPA' ){
            //setCodigo('PRV010')
            return 'PRV010'
        }

    }

    // ASPIRADOR VENTURI
    const buscarCodigoAspiradorVenturi = (gas, conector)=> {
        // Conector: DISS
        if(gas === 'OXÍGENO' && conector === 'DISS' ){
            //setCodigo('PAV001')
            return 'PAV001'
        }
        if(gas === 'AIRE' && conector === 'DISS' ){
            //setCodigo('PAV002')
            return 'PAV002'
        }
        // Conector: AFNOR
        if(gas === 'OXÍGENO' && conector === 'AFNOR' ){
            //setCodigo('PAV003')
            return 'PAV003'
        }
        if(gas === 'AIRE' && conector === 'AFNOR' ){
            //setCodigo('PAV004')
            return 'PAV004'
        }
        // Conector: SS/AGA
        if(gas === 'OXÍGENO' && conector === 'SS/AGA' ){
            //setCodigo('PAV005')
            return 'PAV005'
        }
        if(gas === 'AIRE' && conector === 'SS/AGA' ){
            //setCodigo('PAV006')
            return 'PAV006'
        }
        // Conector: OHMEDA
        if(gas === 'OXÍGENO' && conector === 'OHMEDA' ){
            //setCodigo('PAV007')
            return 'PAV007'
        }
        if(gas === 'AIRE' && conector === 'OHMEDA' ){
            //setCodigo('PAV008')
            return 'PAV008'
        }
        // Conector: ON
        if(gas === 'OXÍGENO' && conector === 'ON' ){
            //setCodigo('PAV009')
            return 'PAV009'
        }
        if(gas === 'AIRE' && conector === 'ON' ){
            //setCodigo('PAV010')
            return 'PAV010'
        }

    }

    // HUMIDIFICADOR
    const buscarCodigoHumidificador = (gas)=> {
        if(gas === 'OXÍGENO'){
            //setCodigo('PFR001')
            return 'PFR001'
        }
        if(gas === 'AIRE'){
            //setCodigo('PFR002')
            return 'PFR002'
        }
    }

    // REGULADOR DE PRESION PREAJUSTADO
    const buscarCodigoReguladorPreajustado = (gas, conector)=> {
        // Conector: IRAM
        if(gas === 'OXÍGENO' && conector === 'IRAM' ){
            //setCodigo('PRP001')
            return 'PRP001'
        }
        if(gas === 'AIRE' && conector === 'IRAM' ){
            //setCodigo('PRP002')
            return 'PRP002'
        }
        if(gas === 'N2O' && conector === 'IRAM' ){
            //setCodigo('PRP003')
            return 'PRP003'
        }
        if(gas === 'N2' && conector === 'IRAM' ){
            //setCodigo('PRP004')
            return 'PRP004'
        }
        if(gas === 'CO2' && conector === 'IRAM' ){
            //setCodigo('PRP005')
            return 'PRP005'
        }
        
        // Conector: YUGO
        if(gas === 'OXÍGENO' && conector === 'YUGO' ){
            //setCodigo('PRP006')
            return 'PRP006'
        }
        if(gas === 'AIRE' && conector === 'YUGO' ){
            //setCodigo('PRP007')
            return 'PRP007'
        }
        if(gas === 'N2O' && conector === 'YUGO' ){
            //setCodigo('PRP008')
            return 'PRP008'
        }
        if(gas === 'N2' && conector === 'YUGO' ){
            //setCodigo('PRP009')
            return 'PRP009'
        }
        if(gas === 'CO2' && conector === 'YUGO' ){
            //setCodigo('PRP010')
            return 'PRP010'
        }
    }

    // REGULADOR DE PRESION PREAJUSTADO CAUDALÍMETRO
    const buscarCodigoReguladorPreajustadoCaudalimetro = (gas, conector, rango)=> {
        //Conector IRAM
        if(gas === 'OXÍGENO' && conector === 'IRAM' && rango === '0-3 L/MIN' ){
            return 'PRP011'
        }
        if(gas === 'OXÍGENO' && conector === 'IRAM' && rango === '0-15 L/MIN' ){
            return 'PRP013'
        }
        if(gas === 'AIRE' && conector === 'IRAM' && rango === '0-3 L/MIN' ){
            return 'PRP015'
        }
        if(gas === 'AIRE' && conector === 'IRAM' && rango === '0-15 L/MIN' ){
            return 'PRP017'
        }
        //Conector YUGO
        if(gas === 'OXÍGENO' && conector === 'YUGO' && rango === '0-3 L/MIN' ){
            return 'PRP012'
        }
        if(gas === 'OXÍGENO' && conector === 'YUGO' && rango === '0-15 L/MIN' ){
            return 'PRP014'
        }
        if(gas === 'AIRE' && conector === 'YUGO' && rango === '0-3 L/MIN' ){
            return 'PRP016'
        }
        if(gas === 'AIRE' && conector === 'YUGO' && rango === '0-15 L/MIN' ){
            return 'PRP018'
        }
    }

    // REGULADOR AJUSTABLE - aparecen mas gases
    const buscarCodigoReguladorAjustable = (gas, conector)=> {
        // Conector: IRAM
        if(gas === 'OXÍGENO' && conector === 'IRAM' ){
            //setCodigo('PRA001')
            return 'PRA001'
        }
        if(gas === 'AIRE' && conector === 'IRAM' ){
            //setCodigo('PRA002')
            return 'PRA002'
        }
        if(gas === 'N2O' && conector === 'IRAM' ){
            //setCodigo('PRA003')
            return 'PRA003'
        }
        if(gas === 'N2' && conector === 'IRAM' ){
            //setCodigo('PRA004')
            return 'PRA004'
        }
        if(gas === 'CO2' && conector === 'IRAM' ){
            //setCodigo('PRA005')
            return 'PRA005'
        }
        // Conector: YUGO
        if(gas === 'OXÍGENO' && conector === 'YUGO' ){
            //setCodigo('PRA006')
            return 'PRA006'
        }
        if(gas === 'AIRE' && conector === 'YUGO' ){
            //setCodigo('PRA007')
            return 'PRA007'
        }
        if(gas === 'N2O' && conector === 'YUGO' ){
            //setCodigo('PRA008')
            return 'PRA008'
        }
        if(gas === 'N2' && conector === 'YUGO' ){
            //setCodigo('PRA009')
            return 'PRA009'
        }
        if(gas === 'CO2' && conector === 'YUGO' ){
            //setCodigo('PRA010')
            return 'PRA010'
        }

    }

    const buscarCodigoMascaraNasal = (tamano) => {
        if(tamano === 'Tamaño M'){
            return 'PMA003'
        }
        if(tamano === 'Tamaño MS'){
            return 'PMA002'
        }
    }


    const buscarCodigoDeModelo = (modelo)=> {
        return modelo.nombre;
    }

    return {
        codigo,
        derivarFuncion
    }
}

export default useCodigo;