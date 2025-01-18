// ---------------------------------------------| Ejercicios N° 4 - A|--------------------------------------------- //
//Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {

    if(!numero) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error("El valor ingresado no es un numero");
    if(Math.sign(numero) === -1) return console.warn("El numero no puede ser menor que 0");
    if(numero === 1) return console.warn("El numero no puede ser 1");

    let divisible = false;

    for(let i = 2; i < numero; i++){
        if((numero % i) === 0){
            divisible = true;
            //Rompemos el siclo para que no siga iterando si ya sabemos que el numero es divisible por otro numero
            break;
        }
    }


    return (divisible === false)
            ? console.info(`El numero ${numero} SI es primo`)
            : console.info(`El numero ${numero} NO es primo`)
}

// numeroPrimo(7);
// numeroPrimo(0);



// ---------------------------------------------| Ejercicios N° 4 - B|--------------------------------------------- //
//Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.


const parImpar = (numero = undefined) => {

    if(numero === undefined) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error("El valor ingresado no es un numero");

    return (numero % 2 === 0)
            ? console.info(`El numero ${numero} es PAR`)
            : console.info(`El numero ${numero} es IMPAR`)

}

// parImpar(19);



// ---------------------------------------------| Ejercicios N° 4 - C|--------------------------------------------- //
//Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.


const convertidor = (grados = undefined, unidad = undefined) => {

    if(grados === undefined) return console.warn("No ingresaste ningun grado");
    if(typeof grados !== "number") return console.error("El valor ingresado no es un numero");
    if(unidad === undefined) return console.warn("No ingresaste ninguna unidad");
    if(typeof unidad !== "string") return console.error("El valor ingresado no es una cadena de texto");
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("valor de unidad invalido"); //Ojo aca

    if(unidad === "C"){
        return console.info(`${grados}°C = ${Math.round(grados * (9/5) + 32)}°F`)
    }else if(unidad === "F"){
        return console.info(`${grados}°F = ${Math.round((grados -32) * (5/9))}°C`)
    }


}


convertidor(0, "C");
convertidor(100, "F");

