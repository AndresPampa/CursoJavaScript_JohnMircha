// ---------------------------------------------| Expresiones Regulares |--------------------------------------------- //

let cadena = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
// let expReg = new RegExp("lorem", "i"); //Patron y bandera(flag)
// let expReg2 = /lorem/ig;
// let expReg2 = /[0-9]/ig;
let expReg2 = /lorem{1,}/ig;


//Devuelve un verdadera o falso -> booleano
console.log(expReg2.test(cadena));
//Devuelve una cadena con informacion
console.log(expReg2.exec(cadena));

