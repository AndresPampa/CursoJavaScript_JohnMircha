// ---------------------------------------------| Eventos con Parámetros y Remover Eventos  |--------------------------------------------- //
//

const $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");

function saludar(nombre = "Desconocido/a"){
    alert(`Hola ${nombre}`);
};

//Si utilizo la arrow function se debe poner parentesis
//Esta es la forma para pasarle parametros a la funcion. Debemos envolver el evento en una arrowFunction
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Pampa");
});

//Podemos eliminar eventos
//Cuando queremos remover una funcion debemos declararla
const removerDobleClick = (e) =>{
    alert(`Removiendo el evento de tipo ${e.type}`)
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true; //LO deshabilitamos
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);







