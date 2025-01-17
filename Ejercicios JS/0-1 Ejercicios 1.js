// ---------------------------------------------| Ejercicios N° 1 - A|--------------------------------------------- //
// Programa una funcion que cuente el numero de caractrteres de una cadena de texto ejemplo -> miFuncion("hola mundo") -> devolvera 10

function contarCaracteres(cadena = ""){
    try{
        if(cadena === ""){
            console.warn("No ingresaste una cadena de texto");
        }else if (typeof cadena === "string"){
            console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
        }else{
            console.warn("Ingresaste otro tipo de dato");
        }
    }catch(error){
        console.error(error);
    }
}

contarCaracteres("Tu mama es mi novia");
contarCaracteres(1.0);


// --------------- OTRA FORMA

const contarCaracteres2 = (cadena = "") => 
    (!cadena) ? console.warn("No ingresaste ninguna cadena") : console.info(`La cadena es ${cadena} y tiene ${cadena.length} caracteres`)

contarCaracteres2("");
contarCaracteres2("Tu mama es mi novia");

// ---------------------------------------------| Ejercicios N° 1 - B|--------------------------------------------- //
//Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados, ejemplo -> miFuncion("Hola mundo", 4) -> devolvera "Hola"
function recortarCadena(cadena= "", cortar = 0){
    try{
        if(!cadena){
            console.warn("No ingresaste ningun texto");
        }else if(typeof cadena === "string"){
            let nuevaCadena = cadena.slice(0, cortar)
            console.log(`La cadena ${cadena} se recorto en ${cortar} quedando: "${nuevaCadena}"`)
        }
    }catch(error){
        console.error(error);
    }
}

recortarCadena("Hola mundo", 4);

// --------------- OTRA FORMA

const recortarTexto = (cadena="", longitud=undefined) => 
(!cadena)
    ? console.warn("No ingresaste ninguna cadena") : 
        (longitud === undefined) ? console.warn("No ingresaste la longitud a cortar") : console.info(cadena.slice(0, longitud));

recortarTexto("hola mundo", 4);


// ---------------------------------------------| Ejercicios N° 1 - C|--------------------------------------------- //
// Programa una funcion que dada una String te devuelva un Array de textos separados por cierto caracter, ejemplo -> miFuncion("hola que tal", " ") -> devolvera ["Hola", "que", "tal"]

const splitCadena = (cadena = "", separador = undefined) =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena")
        : (separador === undefined)
            ? console.warn("No ingresaste el caracter separador")
            : console.info(cadena.split(separador));

splitCadena("tu mama es mi novia", " ");
splitCadena("1,2,3,4,5,6,7,8", ",");



// ---------------------------------------------| Ejercicios N° 1 - D|--------------------------------------------- //
// Programa una funcion que repita un texto x veces, ejemplo miFuncion("hola mundo", 3) -> devolvera "hola mundo hola mundo hola mundo"

const repetirTexto = (texto="", veces= undefined) => {

    let arrayTexto = new Array();

    if(!texto){
        return console.warn("No ingresaste ningun texto");
    }else if(veces === undefined){
        return console.warn("No ingresaste el numero de veces a repetir el texto");
    }else if(Math.sign(veces) === -1){
        return console.error("las veces no pueden ser menores a 0");
    }else if(veces === 0){
        return console.error("Las veces no pueden ser 0");
    }else{
        for(let i= 1; i <= veces; i++){
            console.info(`${texto}, ${i}`);
            arrayTexto.push(texto);
        }
    }

    return console.log(arrayTexto);
}

repetirTexto("Hola mundo", 3);
repetirTexto("Hola mundo", );


// --------------- OTRA FORMA



