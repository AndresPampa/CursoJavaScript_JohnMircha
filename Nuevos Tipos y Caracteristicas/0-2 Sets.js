// ---------------------------------------------| Sets |--------------------------------------------- //
//Es una nueva estructura de datos que parece ser un arreglo(pero no lo es) que solo acepta valores unicos

const miSet = new Set([1, 2, 3, 4, 5, 3, true, false, {}, {}, "hola", "HOLA"]);

console.log(miSet);
console.log(miSet.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("Recorriendo Set 1")

for(item of miSet){
    console.log(item)
}

console.log("Recorriendo Set 2")

set2.forEach(el => console.log(el));

let arr = Array.from(set2);

console.log(Array.from(set2)[1]);
console.log(arr[4]);

miSet.delete("HOLA");
console.log(miSet.size)
console.log(miSet.has("hola"))

set2.clear();
console.log(set2)