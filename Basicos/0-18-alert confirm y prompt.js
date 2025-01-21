// ---------------------------------------------| Alert, confirm y prompt |--------------------------------------------- //
console.log(window);
// window.alert("Esto es una alerta");
// window.confirm("Esto es una confirmacion");
// window.prompt("Esto es un prompt y le permite al usuario ingresar un valor");

let alerta = window.alert("Esto es una alerta"),
    confirmacion = window.confirm("Esto es una confirmacion"),
    aviso = window.prompt("Esto es un prompt y le permite al usuario ingresar un valor");

console.log(alerta);
console.log(confirmacion);
console.log(aviso); //valor ingresado por el usuario y si cancela da null

