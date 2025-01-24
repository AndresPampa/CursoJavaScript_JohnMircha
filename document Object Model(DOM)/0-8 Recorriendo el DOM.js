// ---------------------------------------------| DOM Traversing: Recorriendo el DOM  |--------------------------------------------- //
//Hay al rededor de 12 nodos diferentes

const $cards = document.querySelector(".cards")
console.log($cards);
console.log($cards.children); //Nos da un html collection con todos los hijos que hay dentro
console.log($cards.children[2]); //Ingresamos a uno de los elementos
console.log($cards.parentElement); //nos da el padre, osea donde esta esa section
console.log($cards.firstChild); //Nos da el primer hijo nodo -> si da un #text puede ser por un salto de linea
console.log($cards.firstElementChild); //Aca nos da el primer elemento

//como hay un first hay un last
console.log($cards.lastElementChild);

//Tambien podemos ver el hermano anterior y posterior
console.log($cards.previousElementSibling); //siempre los elementos -> hermano anterios
console.log($cards.nextElementSibling); //siempre los elementos -> hermano posterior

//metodo nuevo
console.log($cards.closest("body")); //va a buscar el padre mas cercano que tengo hacia arriba
console.log($cards.children[3].closest("section"));
