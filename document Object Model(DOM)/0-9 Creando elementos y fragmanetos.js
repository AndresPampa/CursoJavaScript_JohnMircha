// ---------------------------------------------| Creando elementos y fragmanetos  |--------------------------------------------- //
//

const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("Animals X2"),
      $cards = document.querySelector(".cards"),
      $figure2 = document.createElement("figura");


//Agregamos un nuevo elemento
$img.setAttribute("src", "http://fpoimg.com/200x200?text=Animals X2");
$img.setAttribute("alt", "Animals X2");
$figure.classList.add("card") //Sin punto

//Configuramos los elementos
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);


$figure2.innerHTML = `
<img src="http://fpoimg.com/200x200?text=People X2" alt="People X2">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);


const $estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
      $ul = document.createElement("ul");


//No es buena practica utilizar el document.write
document.write("<h3>Estaciones del Año<h3>");
document.body.appendChild($ul);

$estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el; //Utilizamos textcontent porque insertamos texto nada mas
    $ul.appendChild($li);
});

//Segunda forma -> insertamos dinamicamente los elementos
const $contienentes = ["Africa", "America", "Asia", "Oceania", "Europa"],
      $ul2 = document.createElement("ul");


document.write("<h3> --->|Contienentes|<--- <h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = ''; //La inicializamos vacia para poder ir agregando valores
$contienentes.forEach((el) =>{$ul2.innerHTML +=`<li>${el}</li>`}) //Es += para ir agreando y no sobreescribiendo

//Las insersiones al DOM son las operaciones mas demandantes. Por cada operacion del ciclo le estamos 
//pegando al DOM.

//Para eso podemos crear Fragmentos DINAMICOS
const meses = [
    "enero",
    "febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

//No podemos utilizar la tecnica del innerHTML
meses.forEach((el) =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li)
});

document.write("<h3> --->|Estaciones del año|<--- <h3>")
document.body.appendChild($fragment)

//Cuando tengamos que renderizar varios elementos siempre nos conviene hacerlo mediante Fragmentos

