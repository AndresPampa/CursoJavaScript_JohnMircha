// ---------------------------------------------| ARROW FUNCTIONS |--------------------------------------------- //
//Es una implementacion para mejorar como escribimos
//Es una nueva forma de definir funciones anonima expresadas

const saludar = function(){
    console.log(`Hola`);
}
saludar();

//Arrow Function
//Cuando una funcion flecha recibe parametros no hace falta poner los parentesis
const saludar1 = nombre => console.log(`Hola ${nombre}`);
saludar1("Irma");


//Esto 
// const sumar = function(a,b){
//     return a + b;
// } 
// console.log(sumar(8,9))

//Esto Quedaria asi:
const sumar = (a,b) => a + b; 
console.log(sumar(9,9));


//Varias lineas
const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
funcionDeVariasLineas();

//El metodo for each recibe una funcion
const numeros = [1,2,3,4,5,6];
numeros.forEach((el, index) => 
    console.log(`El elemento ${el} esta en la posicion ${index}`));


//Con el objeto this
function Perro (){
    console.log(this);
}
Perro();
//Las arrows funcion capturan el objeto this. del contexto donde se encuentran

const perro = {
    nombre: "Kenai",
    ladrar:() => {
        console.log(this);
    },
    ladrar2(){
        console.log("GUAU GUAUUU");
    }
}
perro.ladrar();
perro.ladrar2();
//Las arrow function tienen la capacidad de capturar el contexto en donde se encuentran








