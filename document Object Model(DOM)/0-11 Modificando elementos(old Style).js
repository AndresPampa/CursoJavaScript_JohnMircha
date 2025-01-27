// ---------------------------------------------| Modificando elementos(old Style)  |--------------------------------------------- //
// Vamos a aprender como se hacia antes y el proximo video vamos a ver como se hace ahora
// 

const $card = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCard = $card.cloneNode(true); //debemos pasarle true para que clone todo el contenido

$newCard.innerHTML = `
    <img src="http://fpoimg.com/200x200?text=Any" alt="Any">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card") //Agregamos clase ->card
// $card.replaceChild($newCard, $card.children[2]); //Reemplaza una tarjeta existente por una nueva

//Insertar antes de un nodo de referencia
// $card.insertBefore($newCard, $card.firstElementChild)


//Metodo para eliminar
// $card.removeChild($card.lastElementChild)


//El dOM tiene un metodo para clonar como importNode pero se llama coneNode
document.body.appendChild($cloneCard);


//Estos son los metodos viejos para agregar Elementos












