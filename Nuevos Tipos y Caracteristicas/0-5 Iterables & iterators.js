// ---------------------------------------------| Iterables & Iteradores |--------------------------------------------- //

//Iterable es el elemento que se puede recorrer e iterador es el mecanismo con el que se puede recorrer un elemento

// const iterable = new Set([1,2,3,3,4,5]);
// const iterable = "Hola Mundo";
const iterable = new Map([["nombre", "Pampa"], ["edad", 35]]);

//Accedemos al iterador de nuestro array iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
// console.log(iterador.next()); //nos devuelve el valor y un segundo parametro que indica si se acabaron los elementos
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());//undefined y done: true

let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next();
}
