// ---------------------------------------------| Symbols |--------------------------------------------- //
Symbol() //Es un tipo de dato primitivo que fue introducido en el ES2015
//Nos permiten crear identificadores unicos
// let id = "hola"
// let id2 = "hola"
// console.log(id === id2) //TRue



let id = Symbol("id");
let id2 = Symbol("id");

console.log(id, id2)
console.log(id === id2) //'false'
console.log(typeof id, typeof id2) //'sumbol'

//La buena practicas dice que los creemos con constantes => const

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
    [NOMBRE]: "Pampa",
    edad: 35
}

console.log(persona);

persona.NOMBRE = "Pampeano";

console.log(persona);

console.log(persona.NOMBRE);
console.log(persona[NOMBRE]); //Funciona como si fueran propiedades privadas

persona[SALUDAR] = function(){
    console.log("Hola")
};

console.log(persona[SALUDAR]());

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}

console.log(Object.getOwnPropertySymbols(persona))