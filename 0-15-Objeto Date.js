// ---------------------------------------------| Objeto Date |--------------------------------------------- //

console.log(Date());


let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
//dia de la semana D-L-M-M-J-V-S = 0-1-2-3-4-5-6
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getYear());//No se usa
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getTime());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleDateString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getTimezoneOffset()/60);
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());

//LIbreria --> **Moments.js**

let cumplePampa = new Date(1988, 10, 6);
console.log(cumplePampa);
