import {useState} from "react";

const useCodigo = (nombre, gas, conector, rango, modelo)=> {
    const [codigo, setCodigo] = useState();

    function derivarFuncion(gasAcc){
     
        if(nombre === 'Caudalímetro'){
            return buscarCodigoCaudalimetro(gas, conector, rango)            
        } else if( nombre === 'Caudalímetro Compacto' ){
            return buscarCodigoCaudalimetroM3(gas, conector, rango)
        }        
        else if( nombre === 'Aspirador Venturi' ){
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
        } else if(nombre.includes('U. Terminal')){
            return buscarCodigoUnidadTerminal(nombre,gasAcc)
        } else if(nombre.includes('Conector recto roscado')){
            return buscarCodigoConectorEntrada(nombre,gasAcc)
        }
        else if(nombre.includes('manguera')){
            return buscarCodigoConectorManguera(nombre,gasAcc)
        }
        else if(nombre.includes('Toma doble')){
            return buscarCodigoTomaDuplas(nombre,gasAcc)
        }
        else if(nombre.includes('bloque base')){
            return buscarCodigoAdaptacion(nombre,gasAcc)
        }
        else if(nombre === 'Positiva' || nombre === 'Negativa'){
            return buscarCodigoAlarmaGases(nombre)
        }
        else if(nombre === '16 Puestos' || nombre === '24 Puestos'){
            return buscarCodigoCentralRep(nombre)
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

    // CAUDALIMETRO M3
    const buscarCodigoCaudalimetroM3 = (gas, conector, rango)=> {

        // Conector: DISS
        if(gas === 'OXÍGENO' && conector === 'DISS' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA002')
            return 'PCA006'
        }
        if(gas === 'OXÍGENO' && conector === 'DISS' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA014')
            return 'PCA018'
        }
        if(gas === 'AIRE' && conector === 'DISS' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA008')
            return 'PCA012'
        }
        if(gas === 'AIRE' && conector === 'DISS' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA020')
            return 'PCA024'
        }
        // Conector: AFNOR
        if(gas === 'OXÍGENO' && conector === 'AFNOR' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA026')
            return 'PCA030'
        }
        if(gas === 'OXÍGENO' && conector === 'AFNOR' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA038')
            return 'PCA042'
        }
        if(gas === 'AIRE' && conector === 'AFNOR' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA032')
            return 'PCA036'
        }
        if(gas === 'AIRE' && conector === 'AFNOR' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA044')
            return 'PCA048'
        }
        // Conector: SS/AGA
        if(gas === 'OXÍGENO' && conector === 'SS/AGA' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA050')
            return 'PCA054'
        }
        if(gas === 'OXÍGENO' && conector === 'SS/AGA' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA062')
            return 'PCA066'
        }
        if(gas === 'AIRE' && conector === 'SS/AGA' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA056')
            return 'PCA060'
        }
        if(gas === 'AIRE' && conector === 'SS/AGA' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA068')
            return 'PCA072'
        }
        // Conector: OHMEDA
        if(gas === 'OXÍGENO' && conector === 'OHMEDA' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA074')
            return 'PCA078'
        }
        if(gas === 'OXÍGENO' && conector === 'OHMEDA' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA086')
            return 'PCA090'
        }
        if(gas === 'AIRE' && conector === 'OHMEDA' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA080')
            return 'PCA084'
        }
        if(gas === 'AIRE' && conector === 'OHMEDA' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA092')
            return 'PCA096'
        }
        // Conector: ON
        if(gas === 'OXÍGENO' && conector === 'ON' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA098')
            return 'PCA102'
        }
        if(gas === 'OXÍGENO' && conector === 'ON' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA110')
            return 'PCA114'
        }
        if(gas === 'AIRE' && conector === 'ON' && rango === '0-3 L/MIN' ){
            //setCodigo('PCA104')
            return 'PCA108'
        }
        if(gas === 'AIRE' && conector === 'ON' && rango === '0-15 L/MIN' ){
            //setCodigo('PCA116')
            return 'PCA120'
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
    // MASCARA NASAL
    const buscarCodigoMascaraNasal = (tamano) => {
        if(tamano === 'Tamaño M'){
            return 'PMA003'
        }
        if(tamano === 'Tamaño MS'){
            return 'PMA002'
        }
    }
    //MODELO
    const buscarCodigoDeModelo = (modelo)=> {
        return modelo.nombre;
    }

    //ACCESORIOS
    // Unidades Terminales
    const buscarCodigoUnidadTerminal = (nombre, gas)=>{
        if(nombre === 'U. Terminal M2 DISS'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT064'
            } else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT065'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT066'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT067'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'PUT068'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'PUT069'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'PUT070'
            }
            else if(gas.toUpperCase() === 'EVAC'){
                return 'PUT071'
            }
        }
        if(nombre === 'U. Terminal M2 AFNOR'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT072'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT073'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT074'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT075'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'PUT076'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'PUT077'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'PUT078'
            }
        }
        if(nombre === 'U. Terminal M2 SS/AGA'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT017'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT018'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT019'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT020'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'PUT021'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'PUT022'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'PUT023'
            }
        }
        if(nombre === 'U. Terminal M1 DISS'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT001'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT002'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT003'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT004'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'PUT005'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'PUT006'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'PUT008'
            }
            else if(gas.toUpperCase() === 'EVAC'){
                return 'PUT009'
            }
        }


    }
    // Conectores de Entrada
    const buscarCodigoConectorEntrada = (nombre, gas)=>{
        if(nombre === 'Conector recto roscado DISS'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO001'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO002'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO003'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO004'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SCO005'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO006'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'SCO007'
            }
            else if(gas.toUpperCase() === 'EVAC'){
                return 'SCO008'
            }
        }
        if(nombre === 'Conector recto roscado AFNOR'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO010'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO011'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO012'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO013'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SCO014'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO015'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'SCO016'
            }
        }
        if(nombre === 'Conector recto roscado SS/AGA'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO017'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO018'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO019'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO020'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SCO021'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO022'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'SCO023'
            }
        }
        if(nombre === 'Conector recto roscado OHMEDA'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO028'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO029'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO030'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO031'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO032'
            }
        }
        if(nombre === 'Conector recto roscado ON'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO024'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO025'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO026'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO027'
            }
        }
        if(nombre === 'Conector recto roscado IRAM'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO040'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO041'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO042'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SCO043'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO043'
            }
        }
        if(nombre === 'Conector recto roscado YUGO'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO044'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO045'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO046'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO047'
            }
        }
    }
    const buscarCodigoConectorManguera = (nombre, gas)=>{
        if(nombre === 'Conector recto para manguera DISS Plástico'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO123'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO124'
            }
        }
        if(nombre === 'Conector recto para manguera DISS Bronce'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO048'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO049'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO050'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO051'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SCO052'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO053'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'SCO054'
            }
            else if(gas.toUpperCase() === 'EVAC'){
                return 'SCO055'
            }
        }
        if(nombre === 'Conector recto para manguera DISS'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO126'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO127'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO128'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO129'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SCO130'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO131'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'SCO132'
            }
            else if(gas.toUpperCase() === 'EVAC'){
                return 'SCO133'
            }
        }
        if(nombre === 'Conector 90° para manguera DISS'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO057'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO058'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO059'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO060'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SCO061'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO062'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'SCO063'
            }
            else if(gas.toUpperCase() === 'EVAC'){
                return 'SCO064'
            }
        }
        if(nombre === 'Conector recto para manguera AFNOR'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO135'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO136'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO137'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO138'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SCO139'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO140'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'SCO141'
            }
        }
        if(nombre === 'Conector 90° para manguera AFNOR'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SCO066'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SCO067'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SCO068'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SCO069'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SCO070'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SCO071'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'SCO072'
            }
        }
    }
    const buscarCodigoTomaDuplas = (nombre, gas)=>{
        if(nombre === 'Toma doble: Entrada DISS Salida DISS'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT048'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT049'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT050'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT051'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'PUT052'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'PUT053'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'PUT054'
            }
        }
        if(nombre === 'Toma doble: Entrada DISS Salida AFNOR'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT088'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT089'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT090'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT091'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'PUT092'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'PUT093'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'PUT094'
            }
        }
        if(nombre === 'Toma doble: Entrada AFNOR Salida AFNOR'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT057'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT058'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT059'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT060'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'PUT061'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'PUT062'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'PUT063'
            }
        }
        if(nombre === 'Toma doble: Entrada AFNOR Salida DISS'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT079'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT080'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT081'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT082'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'PUT083'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'PUT084'
            }
            else if(gas.toUpperCase() === 'IAIRE'){
                return 'PUT085'
            }
        }
        if(nombre === 'Toma doble: Entrada O.N. Salida DISS'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT130'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT131'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT132'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT133'
            }
        }
        if(nombre === 'Toma doble: Entrada SS/AGA Salida DISS'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'PUT134'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'PUT135'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'PUT136'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'PUT137'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'PUT138'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'PUT139'
            }
        }
    }
    const buscarCodigoAdaptacion = (nombre, gas)=>{
        if(nombre === 'Conexión DISS M1 a bloque base AFNOR M1'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SUT096'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SUT097'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SUT098'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SUT099'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SUT100'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SUT101'
            }
        }
        if(nombre === 'Conexión DISS M1 a bloque base O.N.'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SUT114'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SUT115'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SUT116'
            }
        }
        if(nombre === 'Conexión DISS M1 a bloque base AGA'){
            if(gas.toUpperCase() === 'OXIGENO'){
                return 'SUT120'
            } 
            else if(gas.toUpperCase() === 'AIRE'){
                return 'SUT121'
            }
            else if(gas.toUpperCase() === 'VACIO'){
                return 'SUT122'
            }
            else if(gas.toUpperCase() === 'N2O'){
                return 'SUT123'
            }
            else if(gas.toUpperCase() === 'N2'){
                return 'SUT124'
            }
            else if(gas.toUpperCase() === 'CO2'){
                return 'SUT125'
            }
            else if(gas.toUpperCase() === 'EVAC'){
                return 'SUT126'
            }
        }
    }
    const buscarCodigoAlarmaGases = (nombre)=>{
        if(nombre === 'Positiva'){
            return 'PAG001'
        } else if (nombre === 'Negativa'){
            return 'PAG002'
        }
    }

    const buscarCodigoCentralRep = (nombre)=>{
        if(nombre === '16 Puestos'){
            return 'PRL001'
        } else if (nombre === '24 Puestos'){
            return 'PRL004'
        }
    }



    return {
        codigo,
        derivarFuncion
    }
}

export default useCodigo;