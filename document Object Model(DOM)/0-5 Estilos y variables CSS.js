// ---------------------------------------------| Estilos y variables CSS |--------------------------------------------- //
//Enlace a
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style); //Nos devuelve un objeto CSSstyleDeclaration. Escritas en formato lower camelcase

//Chrome esta basado en webkit*** dato de color
//Los estilos son un atributo y es mas frecuente que ver:
console.log($linkDOM.getAttribute("style")); //Nos devuelve lo que esta en el atributo

console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM)); //Es un mapa diferente. Nos da los valores por defectos que nos da el navegador
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));
// se puede poner sin el window == console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
$linkDOM.style.setProperty("text-decoration", "none"); //Saco el subrallado
$linkDOM.style.setProperty("display", "block"); //Ocupa todo el espacio disponible
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRigth = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));

//variables CSS -> Custom Properties CSS
const $html = document.documentElement; //Representa la etiqueta HTML
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor);
console.log(varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//Cambiamos el color a PINK
// $html.style.setProperty("--dark-color", "pink"); //Establece el valor pink en la etiqueta html
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// console.log(varDarkColor);
// $body.style.setProperty("background-color", varDarkColor);



// -->>
//Como itero por las propiedades de css de los elementos que queremos?
