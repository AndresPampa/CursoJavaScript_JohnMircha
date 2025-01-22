// ---------------------------------------------| Generators |--------------------------------------------- //

//se coloca un * pegado y justo despues de la palabra function 
function* iterable(){
//    yield //es como un return pero le indica a la funcion que mande el solo el primer valor y despues deberiamos aplicar el metodo next
    yield "Hola";
    console.log("Hola consola");
    yield "hola ";
    console.log("Seguimos con mas intrucciones de nuestro codigo");
    yield "Hola 3";
    yield "Hola 4";
}

let iterador = iterable()

// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for (let y of iterador){
    console.log(y)
}

const arr = [...iterable()];
console.log(arr)

function cuadrado(valor){
    setTimeout(()=>{
        return console.log({
            valor: valor,
            resultado: valor*valor
        });
    }, Math.random * 1000)
}

function* generador(){
    console.log("Inicia Generator")
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generator")
}

let gen = generador();

for(let y of gen){
    console.log(y)
}