// ---------------------------------------------| Ejercicios N° 6 - A|--------------------------------------------- //
// Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = "") =>{

    if(!cadena) return console.warn("No ingresaste ninguna cadena de texto");
    if(typeof cadena !== "string") return console.warn("El valor ingresado No es una cadena de texto")

    let vocales = 0;
    let consonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    for(let letra of cadena){
        if(/[aeiouáéíóúÁÉÍÓÚ]/.test(letra)){
            vocales++;
        }

        if(/[BCDFGHJKLMNÑOPQRSTVWXYZbcdfghjklmnñpqrstvwyz]/.test(letra)){
            consonantes++;
        }
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })

}

contarLetras("hola como estas");
contarLetras(3);
contarLetras("aeiou");
contarLetras("ñoño");
contarLetras("tu mama es mi novia");



// ---------------------------------------------| Ejercicios N° 6 - B|--------------------------------------------- //
// Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = undefined) => {

    if(!nombre) return console.warn("No ingresaste ninguna cadena de texto");
    if(typeof nombre !== "string") return console.warn("El valor ingresado No es una cadena de texto");

    let expReg = /^[A-Za-zÑñáéíóúü\s]+$/g.test(nombre.toLocaleLowerCase()); //el ^ indica que antes del texto no tiene que haber nada y el $ indica no puede haber nada despues

    return (expReg)
            ? console.info(`${nombre} es un nombre VALIDO!`)
            : console.info(`${nombre} NO es un nombre valido`);
}

// validarNombre("Andrés Abdala Alvarez");
// validarNombre("tuvieja");
// validarNombre("tumamaesminovia")
// validarNombre("tu turrita34")


// ---------------------------------------------| Ejercicios N° 6 - C|--------------------------------------------- //
// Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarMail = (email) => {

    if(!email) return console.warn("No ingresaste Email");
    if(typeof email !== "string") return console.warn("El valor ingresado del mail No es una cadena de texto");

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email.toLocaleLowerCase())
                //  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i //Expresion regular para validar mails

    return (expReg)
            ? console.info(`${email} es un EMAIL VALIDO!`)
            : console.info(`${email} NO es un EMAIL valido`);

}

validarMail("andrespampa@gmail.com");
validarMail("tu.vieja@gmail.com");

