// ---------------------------------------------| Modulos Import-Export |--------------------------------------------- //
import  {saludar, PI} from "./constantes.js"; //Aunque este en la misma carpeta siempre tengo que poner ./ para indicar que es un archivo local(SIEMPRE!).
import { sumar, restar, aritmetica as ar } from "./aritmetica.js";
import SaludarClase from "./constantes.js";

console.log("Archivo 0-21-Modulos Import-export.js");

// Ordenamiento de codigo:
// 1 - Importacion de modulos
// 2 - Declaracion de variables
// 3 - Declaracion de funciones
// 4 - Ejecucion de codigo

console.log(PI);
// console.log(sumar(3, 5));
console.log(ar.sumar(3, 5));
saludar();
let saludo = new SaludarClase();
saludo;

//Ejemplo real de import react
// import React, {component} from "react";
