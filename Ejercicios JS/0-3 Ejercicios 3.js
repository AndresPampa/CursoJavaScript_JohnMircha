// ---------------------------------------------| Ejercicios N° 3 - A|--------------------------------------------- //
//Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroRandom = () => console.info(Math.round((Math.random() * 100) + 500));
numeroRandom();


// ---------------------------------------------| Ejercicios N° 3 - B|--------------------------------------------- //
//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {

    if(!numero) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error("El valor ingresado no es un numero");

    let numeroString = numero.toString();
    let alReves = numeroString.split("").reverse().join("");

    return (parseInt(numero) === parseInt(alReves))
            ? console.log(`El numero: ${numero} es capicua ya que si lo damos vuelta seria ${alReves}`) 
            : console.log(`No es capicua ya que ${numero} no es igual a ${alReves}`)

}

capicua(12321);




// ---------------------------------------------| Ejercicios N° 3 - C|--------------------------------------------- //
//Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
// se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


const factorial = (numero = undefined) => {

    if(!numero) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error("El valor ingresado no es un numero");
    if(Math.sign(numero) === -1) return console.warn("El numero no puede ser menor que 0");
    if (numero === 0) return console.warn("El numero no puede ser 0");

    let factorial = 1;

    for(let i = numero; i > 1; i--){
        factorial *= i;
    }
    
    return console.info(`El factorial del numero = ${numero} es ${factorial}`)

}

factorial(5);