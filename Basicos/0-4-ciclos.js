// ---------------------------------------------| CICLOS |--------------------------------------------- //

// ---------------------------------------------| WHILE |--------------------------------------------- //

let contador = 0;
while(contador < 10){
    console.log("while " + contador);
    contador++;
}
//COn while siempre va a comparar antes de ejecutar las lineas del ciclo


do{
    console.log("Do while "+contador); // contador = 10;
}while(contador < 10)

//con do while primero va a correr el codigo y despues va a leer la condicion


// ---------------------------------------------| FOR |--------------------------------------------- //

for(let i=0; i < 10 ;i++ ){
    console.log("for "+ i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

//Desde ES5
// ---------------------------------------------| FOR IN |--------------------------------------------- //
//Es mas para objetos primitivos de JAvaScript
const jon = {
    nombre: "jon",
    apellido: "Mircha",
    edad: 35
};


for(let propiedad in jon){
    console.log(`Key: ${propiedad}, value: ${jon[propiedad]}`);
    console.log(propiedad);
    console.log(jon[propiedad]);
}

// ---------------------------------------------| FOR OF |--------------------------------------------- //
//Es mas para arreglos, listas, etc...

let cadena = "Hola Mundo!";

for (const elemento of cadena) {
    console.log(elemento);
}











