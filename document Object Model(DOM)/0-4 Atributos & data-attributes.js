// ---------------------------------------------| Atributos and data-attributes |--------------------------------------------- //

//Ingresando a la etiqueta lang
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);

//Otra forma
document.documentElement.setAttribute("lang", "es-AR");
console.log(document.documentElement.lang);



//podemos utilizar const y podemos utilizar let
//Cuando utilizamos una variable que hace referencia al dom le agregamos un $ al princio. Es una buena practica
const $linkDOM = document.querySelector(".link-dom");
//----^


$linkDOM.setAttribute("target", "_blank"); //Me abre el link en una nueva pestaña
$linkDOM.setAttribute("rel", "noopener"); //Evita hackeo
$linkDOM.setAttribute("href", "http://www.google.com");
// console.log($linkDOM.hasAttribute("rel")); //true
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));
//Nos traemos todos los atributos
console.log($linkDOM.getAttributeNames()); //Nos trae todos los atributos

//Data-attributes de HTML5
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "modelo de objeto del documento")
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribite a mi canal y comparte";
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-id", "id1")
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));