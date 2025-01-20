// ---------------------------------------------| Ejercicios N° 7 - A|--------------------------------------------- //
//Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].


const elevarAlCuadrado = (arreglo = undefined) =>{

    if(arreglo === undefined) return console.warn("No ingresaste Ningun arreglo");
    if(!(arreglo instanceof Array)) return console.warn("El valor ingresado No es un Arreglo");
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio");

    for(let num of arreglo){
        if(typeof num !== "number") return console.warn(`El valor de ${num} dentro del arreglo [${arreglo}] no es numerico`)
    }

    const newArreglo = arreglo.map(el => el*el); //Map itera sobre los elementos del arreglo y los transforma

    return console.info(`Arreglo original = ${arreglo}\nArreglo elevado al cuadrado = ${newArreglo}`)
}

// elevarAlCuadrado();
// elevarAlCuadrado(true);
// elevarAlCuadrado({});
// elevarAlCuadrado([]);
// elevarAlCuadrado([2, "c", 3, 5]);
// elevarAlCuadrado([1, 2, 3, 4, 5]);


// ---------------------------------------------| Ejercicios N° 7 - B|--------------------------------------------- //
//Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


const arregloMaxMin = (arreglo = undefined) =>{

    //Validaciones
    if(arreglo === undefined) return console.warn("No ingresaste Ningun arreglo");
    if(!(arreglo instanceof Array)) return console.warn("El valor ingresado No es un Arreglo");
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio");
    for(let num of arreglo){
        if(typeof num !== "number") return console.warn(`El valor de ${num} dentro del arreglo [${arreglo}] no es numerico`)
    }

    //Logica
    let valorMasAlto = Math.max(...arreglo) //El metodo Math.max() espera recibir Spread operator cuando le pasamos un array
    let valorMasChico = Math.min(...arreglo) //Lo mismo
    return console.info(`El valor mas alto del arreglo [${arreglo}] es = ${valorMasAlto} y el valor mas chico es ${valorMasChico}`)
}


// arregloMaxMin([1, 2, 3, 4, 5, 6, 7, 8]);


// ---------------------------------------------| Ejercicios N° 7 - C|--------------------------------------------- //
//Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y 
// en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


const separadorParImpar = (arreglo = undefined) =>{
    //Validaciones
    if(arreglo === undefined) return console.warn("No ingresaste Ningun arreglo");
    if(!(arreglo instanceof Array)) return console.warn("El valor ingresado No es un Arreglo");
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio");
    for(let num of arreglo){
        if(typeof num !== "number") return console.warn(`El valor de ${num} dentro del arreglo [${arreglo}] no es numerico`)
    }

    let arregloPar = [];
    let arregloImpar = [];

    //Logica
    for(num of arreglo){
        if(num % 2 === 0){
            arregloPar.push(num);
        }else{
            arregloImpar.push(num);
        }
    }

    return console.info({
        arreglo,
        arregloPar,
        arregloImpar
    })

    //Otra forma con menos codigo
    return console.info({
        pares: arreglo.filter(num => num%2 === 0),
        impares: arreglo.filter(num => num%2 === 1)
    })

}

separadorParImpar([1, 2, 3, 4, 5, 6, 7]);

