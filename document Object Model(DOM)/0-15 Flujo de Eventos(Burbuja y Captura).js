// ---------------------------------------------| DOM: Flujo de Eventos (Burbuja y Captura)  |--------------------------------------------- //
// Como es que JS interpreta y trabaja con los eventos:
//La propagacion se hace del elemento mas externo al mas interno por eso se le
//llama burbuja. Ese es el esquema que los navegadores soportan


const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);  //NodeList(3) -> div uno, div dos y div tres


function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
}

$divsEventos.forEach(div =>{
    //Fase de burbuja es sin especificar el 3er parametro o con false en el addEventListener
    // div.addEventListener("click", flujoEventos, false); //Si es false es fase de burbuja - si es true es fase de captura
    //La fase de captura es con true en el 3er parametro 
    // div.addEventListener("click", flujoEventos, true);

    //En el 3er parametro tambien puedo pasar una funcion
    //En once nuestro evento se va a ejecutar 1 vez
    div.addEventListener("click", flujoEventos, {
        capture:true, 
        once:true
    });
});

//Depende en que parte de los div hago click me va a decir hola 3 veces, hola 2 veces o hola 1 vez.
//Aplica para cualquier evento

