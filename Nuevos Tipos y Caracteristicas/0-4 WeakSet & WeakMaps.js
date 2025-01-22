// ---------------------------------------------| WeakSet & WeakMaps |--------------------------------------------- //
//es el hermano pequeño de los sets y los maps
//No podemos usar el clear() tenemos que eliminar uno a uno y no tienene la propiedad size

//------------------- WeakSet

// const set = new Set([1, 2, 3, 3, 5, true, false, false]) // esto nos deja
// const ws = new WeakSet();

// let valor1 = {"valor1":1},
//     valor2 = {"valor2":2},
//     valor3 = {"valor3":3}

// // ws.add(1); //Esto no nos deja porque debemos agregar solo objetos
// ws.add(valor1);
// ws.add(valor2);
// ws.add(valor3);

// console.log(ws)
// console.log(ws.has(valor1))
// console.log(ws.has())


// ws.delete(valor3);

// setInterval(()=> console.log(ws), 1000);

// setTimeout(()=>{
//     valor1 = null,
//     valor2 = null,
//     valor3 = null
//     console.log("Elimnados")
// }, 5000);



//------------------- WeakMap

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);
console.log(wm.has(llave1));
console.log(wm.get(llave1));
wm.delete(llave1)
console.log(wm);

setInterval(()=> console.log(wm), 1000);

setTimeout(()=>{
    llave1 = null,
    llave2 = null,
    llave3 = null
    console.log("Elimnados")
}, 5000);



