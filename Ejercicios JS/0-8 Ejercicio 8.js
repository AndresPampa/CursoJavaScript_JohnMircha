// ---------------------------------------------| Ejercicios N° 8 - A|--------------------------------------------- //
//Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá 
// los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
// pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


const ordenarNumeros = (arreglo = undefined) =>{
    //Validaciones
    if(arreglo === undefined) return console.warn("No ingresaste Ningun arreglo");
    if(!(arreglo instanceof Array)) return console.warn("El valor ingresado No es un Arreglo");
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio");
    for(let num of arreglo){
        if(typeof num !== "number") return console.warn(`El valor de ${num} dentro del arreglo [${arreglo}] no es numerico`)
    }

    //Logica
    // let ordenarAscendente = arreglo.map(el =>el).sort();
    // let ordenarDescendente = arreglo.map(el =>el).sort().reverse();
    //Esta forma no funciona porque sort convierte primero en string y ordena lexicográfica, esto significa que ordena los números como si fueran strings

    let ordenarAscendente = [...arreglo].sort((a, b) => a - b);
    let ordenarDescendente = [...arreglo].sort((a, b) => b - a);

    return console.info({
        original: arreglo,
        ascendente: ordenarAscendente, 
        descendente: ordenarDescendente
    })
}


ordenarNumeros([1, 2, 3, 5 ,6 ,7, 8, 9, 101, 54]);



// ---------------------------------------------| Ejercicios N° 8 - B|--------------------------------------------- //
//Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].


const quitarDuplicados = (arreglo = undefined) =>{

    //Validaciones
    if(arreglo === undefined) return console.warn("No ingresaste Ningun arreglo");
    if(!(arreglo instanceof Array)) return console.warn("El valor ingresado No es un Arreglo");
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio");
    if(arreglo.length === 1) return console.warn("El arreglo tiene que tener por lo menos 2 elementos")

    //logica
    // return console.info({
    //     original: arreglo,
    //     //Esta forma es un poco rebuscada y compara los datos con el index del arreglo original vs el arreglo nuevo que crea el filter
    //     sinDuplicados: arreglo.filter((value, index, self) =>self.indexOf(value) === index)
    // })

    //SET: es un nuevo tipo de datos que no permite duplicados como en python
    return console.info({
        original: arreglo,
        sinDuplicados: [...new Set(arreglo)]
    })



}

quitarDuplicados([1, 2, 3, "x", 1, "x", "c", true, true, "3"]);



// ---------------------------------------------| Ejercicios N° 8 - C|--------------------------------------------- //
//Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

//METODO REDUCE: es un metodo que recibe un acumulador y los va reduciendo

const promedio = (arreglo) => {
    //Validaciones
    if(arreglo === undefined) return console.warn("No ingresaste Ningun arreglo");
    if(!(arreglo instanceof Array)) return console.warn("El valor ingresado No es un Arreglo");
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio");
    for(let num of arreglo){
        if(typeof num !== "number") return console.warn(`El valor de ${num} dentro del arreglo [${arreglo}] no es numerico`)
    }

    //Logica con el metodo reduce
    return console.info({
        arreglo: arreglo.reduce((total, num, index, arr)=>{
            total += num;
            if(index === arr.length - 1){
                return `El promedio de [${arr.join(" + ")}] es ${total / arr.length}`;
            }else{
                return total;
            }
        })
    })

}


promedio([1, 10, 12, 12, 12])