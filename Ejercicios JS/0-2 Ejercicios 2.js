// ---------------------------------------------| Ejercicios N° 2 - A|--------------------------------------------- //
//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const inverseTexto = (cadena ="") =>{
    if(!cadena) return console.warn("No ingresaste ningun texto");

    let cadenaInversa = "";

    for(let i = cadena.length; i >= 0 ; i--){
        cadenaInversa += cadena.charAt(i);
    }

    console.info(cadenaInversa)
}

inverseTexto("tu mama es mi novia");


// --------------- OTRA FORMA

const invertirCadena = (cadena="") =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena de texto")
        : console.info(cadena.split("").reverse().join(""))

invertirCadena("hola mundo");
invertirCadena("tu mama es mi novia");



// ---------------------------------------------| Ejercicios N° 2 - B|--------------------------------------------- //
// Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabras = (cadena = "", texto = "") =>{
    if(!cadena) return console.warn("No ingresaste ninguna cadena de texto");
    if(!texto) return console.warn("No ingresaste ningun texto a contar");

    let palabaras = cadena.split(" ");
    let contador = 0;

    for(let i = 0; i < palabaras.length; i++){
        if(palabaras[i] === texto){
            contador++;
        }
    }

    return console.log(`La cadena "${cadena} tiene la palabra ${texto} repetida ${contador} veces`);

}

contarPalabras("tu mama es mi novia o tu mama es la novia del pueblo?", "mama")


// --------------- OTRA FORMA

const contarPalabras2 = (cadena = "", texto = "") =>{
    if(!cadena) return console.warn("No ingresaste ninguna cadena de texto");
    if(!texto) return console.warn("No ingresaste ningun texto a contar");

    let i = 0,
        contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }

    return console.info(`La palabra ${texto} se repite ${contador} veces`)

}

contarPalabras2("tu mama es mi novia o tu mama es la novia del pueblo?", "mama");


// ---------------------------------------------| Ejercicios N° 2 - C|--------------------------------------------- //
//Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra= "") =>{
    if(!cadena) return console.warn("No ingresaste ninguna cadena de texto");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
    return (palabra === alReves) 
        ? console.info(`La palabra ${palabra} es palindromo, palabra al reves = ${alReves}`)
        : console.warn(`La palabra ${palabra} No es palindromo`)
}


// ---------------------------------------------| Ejercicios N° 2 - D|--------------------------------------------- //
//Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = "", patron = "") =>{
    (!texto)
    ? console.warn("No ingresaste ninguna cadena de texto")
    : (!patron)
        ? console.warn("No ingresaste ningun patron a eliminar")
        : console.info(texto.replace(new RegExp(patron, "ig"), ""));
}

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5", "x");







