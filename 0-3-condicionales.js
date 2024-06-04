// ---------------------------------------------| CONDICIONALES |---------------------------------------------
/*if-else*/

let edad = 17;

if(edad > 17){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

/*if-else if-else*/

let hora = 18;

if(hora >= 0 && hora <= 5){
    console.log("Dejame Dormir");
}else if(hora >= 6 && hora <= 11){
    console.log("Buenos Dias");
}else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
}else{
    console.log("Buenas noches");
}

/*Operador Ternario (condicion) ? verdadero: falsa*/

console.log("Operador ternario");

let eresMayor = (edad >= 18) 
    ? "Eres mayor de edad"
    : "Eres Menor de edad";

console.log(eresMayor);

/*Switch - case*/

let dia = 4;
switch(dia){
    case 0: 
        console.log("DOMINGO");
        break;
    case 1:
        console.log("LUNES");
        break;
    case 2:
        console.log("MARTES");
        break;
    case 3: 
        console.log("MIERCOLES");
        break;
    case 4:
        console.log("JUEVES");
        break;
    case 5:
        console.log("VIERNES");
        break;
    case 6:
        console.log("SABADO");
        break;
    default:
        console.log("ERROR: No es una opcion")
        break;
}




