// ---------------------------------------------| DOM: stopPropagation & preventDefault  |--------------------------------------------- //
// 

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

console.log($divsEventos);  //NodeList(3) -> div uno, div dos y div tres


function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation(); //Detiene la propagacion
}


$divsEventos.forEach(div =>{
    div.addEventListener("click", flujoEventos);
});


$linkEventos.addEventListener("click", e =>{
    alert("Hola Rey!");
    // e.preventDefault(); //Cancela la accion que tenga por default el elemento -> No me abre la nueva pestaña de google.com
    e.stopPropagation();
});


//En la proxima clase vamos a ver la delegacion de eventos 