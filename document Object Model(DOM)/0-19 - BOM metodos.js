// ---------------------------------------------| BOM: Métodos  |--------------------------------------------- //
//

//todos los metodos que cuelgan de windows no hace falta escribir el window.alert() -> alert()
// window.alert("Hola");
// window.confirm("Confirmacion");
// window.prompt("Aviso");

const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");


let ventana;

$btnAbrir.addEventListener("click", (e) =>{
    ventana = window.open("https://aprendejavascript.org/");
    // ventana = open("http://www.google.com.ar");
    console.log(ventana);
});


$btnCerrar.addEventListener("click", (e) =>{
    // window.close(); //Me cierra la ventana donde estoy
    // ventana.close();
        ventana.close();
        console.log("Ventana cerrada.");
});

$btnImprimir.addEventListener("click", (e) =>{
    window.print();
});