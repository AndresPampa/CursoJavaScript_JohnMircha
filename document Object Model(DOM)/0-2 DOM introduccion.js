// ---------------------------------------------| DOM introduccion |--------------------------------------------- //

console.log("************ELEMENTOS DEL DOCUMENTO************");
console.log(window.document);
console.log(document);
console.log(document.head)
console.log(document.body)
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
//Cuando seleccionamos algo
console.log(document.getSelection().toString());
// setTimeout(()=>{
//     console.log(document.getSelection().toString());
// }, 3000)

//Escribir en el DOM
document.write("<h2>Escrito desde JavaScript</h2>")
