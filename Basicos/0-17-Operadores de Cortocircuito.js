// ---------------------------------------------| Operadores de Cortocircuito |--------------------------------------------- //

// function saludar(nombre = "Desconocido"){ <------ Asi se hace ahora
function saludar(nombre){
    nombre = nombre || "desconocido";
    console.log(`Hola ${nombre}`);
}

saludar();
console.log("Cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(-2 || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

//Contocircuito AND
console.log("Cadena" && "Valor de la derecha");
console.log(19 && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha");
console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(-2 && "Valor de la derecha");
console.log(0 && "Valor de la derecha");

