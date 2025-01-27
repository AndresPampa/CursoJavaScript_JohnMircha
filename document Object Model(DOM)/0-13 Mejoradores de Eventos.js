// ---------------------------------------------| Mejoradores de Eventos  |--------------------------------------------- //
// Los eventos nos permiten controlas las interacciones de los usuarios.

function holaMundo(){
    alert("Hola Mundo");
    // Podemos acceder al evento en si
    console.log(event);
}

const $eventoSeamtico = document.getElementById("evento-semantico");

//Todos los eventos empiezan con "ON"
//Sin parentesis para que no se ejecute la funcion. Para que no se ejecute la funcion cuando carga el navegador
$eventoSeamtico.onclick = holaMundo;
//Por cada evento puedo asignar una funcion nada mas.
$eventoSeamtico.onclick = function(e){
    alert("Hola mundo manejador de eventos semantico");
    //Esa e me representa el evento
    console.log(e);
};

//TODO -> Cualquier funcion que se ejecute como evento solo puede recibir como parametro el evento en si = e

//Evento con manejador multiple
const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo); //Solo nombramos la funcion sin los parentesis. Los parentesis significan ejecucion automatica
//La diferencia es que puedo agregar varias funciones. Esa es la ventaja de los manejadores multiples.
$eventoMultiple.addEventListener("click", (e)=>{
    alert("HOLA MUNDO: Manejador de eventos multiples")
    console.log(e); //Evento
    console.log(e.type);
    console.log(e.target);
});

