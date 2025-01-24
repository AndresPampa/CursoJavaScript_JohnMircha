// ---------------------------------------------| Clases CSS |--------------------------------------------- //
//

const $card =document.querySelector(".card");
console.log($card);
console.log($card.classList);
console.log($card.className);

//Con el metodo contains le preguntamos si tiene una clase en especial
console.log($card.classList.contains("rotate-45"));
//Agregamos una clase
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

//POdemos quitar una clase
$card.classList.remove("rotate-45");


//Funciona como palanca si tiene la clase la elimina y si no la tiene lo agrega.
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45"); //Se usa para modificar el modo oscuro o modo claro


//Replace class reemplaza de 1 en 1
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135")


//Para remplazar todo
$card.classList.add("opacity-80", "sepia")
$card.classList.remove("opacity-80", "sepia")
$card.classList.toggle("opacity-80", "sepia")