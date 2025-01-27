// ---------------------------------------------| Modificando elementos(cool Style)  |--------------------------------------------- //
//Aca vamos a ver metodos para insertar elementos de forma mas facil

//Aca estan los nuevos metodos
/* 
.insertAdjacent...
    .insertAdjacentElement(position,el) //es como el appendChild
    .insertAdjacentHTML(position,html)  //Agrega contenido HTML
    .insertAdjacentText(position,text)  //Es como un textContent

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/


//Tomamos el ejemplo anterior
const $card = document.querySelector(".cards"),
    $newCard = document.createElement("figure");


// $newCard.innerHTML = `
//     <img src="http://fpoimg.com/200x200?text=Any" alt="Any">
//     <figcaption>Any</figcaption>
// `;

let $contentCard = `
    <img src="http://fpoimg.com/200x200?text=Any" alt="Any">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");

//Agregamos el contenido HTML
$newCard.insertAdjacentHTML("beforeend", $contentCard);
//Agregamos texto
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $card.insertAdjacentElement("afterbegin", $newCard);


//Nuevos metodos
// $card.prepend($newCard);//Hermano anterior
// $card.before($newCard); //Primer Hijo
// $card.append($newCard); //Segundo Hijo
$card.after($newCard); //Hermano posterior