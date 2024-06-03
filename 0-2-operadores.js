/*OPERADORES*/
// ---------------------------------------------| ARITMETICOS |---------------------------------------------
// +-*/%()*/
let a = 5 + (5 - 10)*3;
let modulo = 5%2;

console.log(a);
console.log(modulo);

// ---------------------------------------------| RELACIONALES |---------------------------------------------
//>,<, >=, <=, ==, ===, !=, !==

console.log(8 > 9);
console.log(8 < 9);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);


// =  1 igual es asignacion de variables
// == 2 iguales es comparacion de valores
// === 3 iguales es comparacion de tipo de datos y valor

console.log(7 == 7);
console.log("7" == 7);
console.log("7" === 7);
console.log(0 == false);

// ---------------------------------------------| INCREMENTO DECREMENTO |---------------------------------------------

let i = 1;
i = i + 2;
console.log(i);
i *= 3
console.log(i);

//Casos especiales
// Operador unario
i++;
console.log(i);
i--;
console.log(i);
++i;
console.log(i);
--i;
console.log(i);

// ---------------------------------------------| LOGICOS |---------------------------------------------
/* 
! - Not : Niega, lo que es verdadero lo vuelves falso y viceversa
|| Or : cuando tengo 2 o mas condiciones con que 1 se cumpla, sea verdadera, el or validara
&& and : cuando tengo 2 o mas condiciones y todas tienen que cumplirse, es decir ser verdaderas
*/ 
console.log(!true);
console.log(!false);
console.log((9 === 9) || ("9" === 9));
console.log((9 === 9) && ("9" === 9));






