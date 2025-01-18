// ---------------------------------------------| Ejercicios N° 5 - A|--------------------------------------------- //
// Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertidorBinarioDecimal = (numero = undefined, base= undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste ningun numero");
    if(base === undefined) return console.warn("No ingresaste ninguna base");
    if(typeof numero !== "number") return console.error("El valor ingresado no es un numero");
    if(typeof base !== "number") return console.error("El valor ingresado no es un numero");

    if(base === 2){
        return console.info(`${numero} Base ${base} = ${parseInt(numero, base)} Base 10`)
    }else if(base === 10){
        return console.info(`${numero} Base ${base} = ${(numero.toString(base))} Base 2`)
    }else{
        return console.error("El tipo de base a converitr NO es valido")
    }

}

// convertidorBinarioDecimal(1001111, 2);
// convertidorBinarioDecimal(79, 10);
// convertidorBinarioDecimal(79, 3);

// ---------------------------------------------| Ejercicios N° 5 - B|--------------------------------------------- //
//Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.


const calcularDescuento = (monto = undefined, descuento = 0) => {

    if(monto === undefined) return console.warn("No ingresaste ningun numero");
    if(typeof monto !== "number") return console.error("El valor ingresado no es un numero");
    if(typeof descuento !== "number") return console.error("El valor ingresado no es un numero");
    if(monto === 0) return console.error("El monto no puede ser 0");
    if(Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");
    if(Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");

    return console.info(`TOTAL => ${monto} - ${descuento}% = ${monto - (monto *descuento)/ 100}`)

}

// calcularDescuento(1000, 20);


// ---------------------------------------------| Ejercicios N° 5 - C|--------------------------------------------- //
//Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


const calcularFecha = (fecha = undefined) => {

    if(fecha === undefined) return console.warn("No ingresaste ningun numero");
    if(!(fecha instanceof Date)) return console.error("El valor ingresado no es un Date");

    let resultado = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365, //1000 milisegundos hacen 1 seg y 60 seg 1 min y 60 min 1 hora y 24 horas 1 dia y 365 dias tiene un año
        aniosHumanos = Math.floor(resultado/aniosEnMS);

    
    return (Math.sign(aniosHumanos) === -1)
            ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para llegar a ${fecha.getFullYear()}`)
            : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

calcularFecha(new Date(1999, 0, 1));
calcularFecha(new Date(2040, 0, 1));
calcularFecha(new Date(2025, 0, 1));
calcularFecha(new Date(1880, 0, 1));
calcularFecha(new Date(2024, 12, 1)); //Se puede mejorar
