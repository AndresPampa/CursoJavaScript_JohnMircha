// ---------------------------------------------| BREAK & CONTINUE |--------------------------------------------- //


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
    if(i === 5){
        break;
        continue;
    }
    // const element = array[i];
    console.log(numeros[i])
    
}


for (let i = 0; i < numeros.length; i++) {
    if(i === 5){
        continue;
    }
    // const element = array[i];
    console.log(numeros[i])
    
}


// ---------------------------------------------| DESTRUCTURACION |--------------------------------------------- //

let numeros2 = [1,2,3];

//Sin utilizar la destructuracion
let uno = numeros2[0],
    dos = numeros2[1],
    tres = numeros2[2];
console.log(uno, dos, tres)

//Con destructuracion o destructuring
const [one, two, three] = numeros2;
console.log(one, two, three)

//Ejemplo de uso:
let persona = {
    nombre: "john",
    apellido: "Mircha",
    edad: 35
}
//Para que la destructuracion funcione debo poner los mismos nombres
// let {nombre, apellido, age} = persona
// console.log(nombre, apellido, age)
let {nombre, apellido, edad} = persona
console.log(nombre, apellido, edad)














