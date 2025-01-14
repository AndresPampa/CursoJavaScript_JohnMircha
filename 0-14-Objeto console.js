// ---------------------------------------------| Objeto Console |--------------------------------------------- //
console.log(console);
console.error("Esto es un error");
console.warn("Esto es un warning o aviso");
console.info("Hola");

let nombre = "john",
    apellido = "Mircha",
    edad = 35;

console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);

console.clear();
// console.log(window);
// console.log(document);
// console.dir(window);

console.clear();

console.group("Cursos de @mircha en Youtube");
console.log("Curso de JavaScript");
console.log("Curso de PWA");
console.log("Curso de Node");
console.groupEnd();

console.table(Object.entries(console));

const numeros = [1, 2,3,4,5],
      vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Bonni",
    raza: "boxer",
    color: "cafe"
}

console.table(perro);

console.clear();
console.time("Cuanto tarda mi codigo");

const arreglo = Array(1000000);

for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd("Cuanto tarda mi codigo");
console.log(arreglo);

for(let i = 0; i < 100; i++){
    console.count("codigo for");
    console.log(i);
}

//para hacer pruebas con assert
let x = 3,
    y = 2,
    pruebaXY = "Se espera que x siempre sea menor que y";

console.assert(x < y, {x, y, pruebaXY});