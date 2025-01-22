// ---------------------------------------------| Maps |--------------------------------------------- //
//Son objetos que nos sirven para guardar o almacenar conjunto de valores asociados. Es una coleccion de datos como un objeto primitivo

const mapa = new Map();
mapa.set("nombre", "jon")
mapa.set("apellido", "pampa")
mapa.set("edad", 15);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("corre"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Pampa")
console.log(mapa);
mapa.delete("apellido");
console.log(mapa);

for(let [key, value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`)
}

//Podemos tener llaves que no sean cadenas de texco como numeros, undefined, etc. NO ES ACONSEJABLE

const mapa2 = new Map();
mapa2.set(19, "diecinueve");
mapa2.set(false, "falso");
mapa2.set({}, {});

console.log(mapa2);

//Iniciar un mapa
const mapa3 = new Map([
    ["nombre", "pampita"],
    ["edad", 10],
    ["Animal", "perrito"],
    [null, "es Nulo"]
]);

console.log(mapa3);

const llavesMapa2 = [...mapa.keys()];
const valoresMapa2 = [...mapa.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);