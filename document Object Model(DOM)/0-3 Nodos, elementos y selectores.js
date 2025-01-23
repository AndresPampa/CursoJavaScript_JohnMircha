// ---------------------------------------------| Nodos, elementos y Selectores |--------------------------------------------- //

//No confundir una etiqueta html con un nodo!!!

//.card => el punto es paraclases
//#card => el hashtag es para ids

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
//Estos 3 metodos de arriba han sido reemplazados por
//El query selector es mas lento que el getElementById
console.log(document.querySelector("#menu")); //id
console.log(document.querySelector("a")); //Me trae el primero que encuentra
console.log(document.querySelectorAll("a")); //Nos trae todo
//Los trae como NodeList que es un objeto que no es un ARRAY!!!
//Tienen la propiedad length
console.log(document.querySelectorAll("a").length);
//Funciona como iterable
document.querySelectorAll("a").forEach(el => console.log(el));
//Podemos buscar classes
console.log(document.querySelectorAll(".card"));

//ingresar a cualquiera de los elementos
console.log(document.querySelectorAll(".card")[1]);

//Nos traemos las li dento de menu
console.log(document.querySelectorAll("#menu li"));

//Es el metodo mas usado
console.log(document.getElementById("menu"));


//Estos metodos son los mas usados menos los primeros 3 que ya no se usan.
