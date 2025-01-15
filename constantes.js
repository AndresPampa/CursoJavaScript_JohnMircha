// ---------------------------------------------| Modulos Import-Export |--------------------------------------------- //
export const PI = Math.PI;

export let usuario = "Pampa";
const password = "qwerty"; //Esto no se puede
//Primero declaro la const y despues la puedo exportar por default
// export default password; //Esto si se puede

const hello = () => console.log("HOLA");

//export default sirve para no llamar cuando lo importemos pero debemos utilizar solo un default
export function saludar(){
    console.log("Hola modulos ES6");
}

export default class SaludarClase{
    constructor(){
        console.log("Hola desde la clase")
    }
}

