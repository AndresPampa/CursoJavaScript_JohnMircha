//-------------------------------------------------->| Codigo javascript |<--------------------------------------------------
var primerPalabra = "hola Mundo";
let hello = 3;
console.log(hello);
console.log(primerPalabra);
// console.log(Window);//el objeto que que contiene todo el navegador
//Scope global el alcance del todo el docuemnto
//Ambito de bloque
var musica = "rock";
console.log("Variable musica antes del bloque", musica);
//COmentarios // o /**/
//Esto es un bloque
{
    var musica = 'Pop'
    console.log("Variable musica dentro del bloque", musica);
}

console.log("Variable musica Despues del bloque", musica);

//UTILIZAR LET
console.log("++++++++++++++++++++++++++++++++++++++++")
let musica2 = "rock";
console.log("Variable musica antes del bloque", musica);
//COmentarios // o /**/
//Esto es un bloque
{
    let musica2 = 'Pop'
    console.log("Variable musica dentro del bloque", musica);
}
console.log("Variable musica Despues del bloque", musica);

const PI = 3.1416;
console.log(PI);
//No puedo definir constantes vacias

const objeto = {
    nombre: "John",
    edad: 35,
} //--> EJEMPLO

const colores = ["Blanco", "negro", "Azul"]; //--> EJEMPLO
console.log(objeto);
console.log(colores);
colores.push("naranja");

objeto.correo = "johnmircha@gmail.com";
console.log(objeto);
console.log(colores);

//Una constante no cambia pero depende el tipo de datos. --> Primitivos y compuestos.
//Cual es la mejor opcion para usar const o let
//si a lo largo de un proceso el dato compuesto siempre va a ser texto -> const y si cambia let

//-------------------------------------------------->| Cadenas de texto: STRING |<--------------------------------------------------

// let nombre = 'John';
// let apellido = 'Mircha';
// let saludo = new String('Hola mundo'); //Instancia formal --> NO SE USA

// let lorem = "Lorem ipsu, amet.      ";

// console.log(nombre, apellido);
// console.log(nombre.length, apellido.length);

// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());

// console.log(
//     lorem.includes('amet'),
//     lorem.includes('John'),
//     lorem.trim(),
//     lorem.split(" "),
//     lorem.split(", ")
// )

//-------------------------------------------------->| TEMPLATE STRING |<--------------------------------------------------

let nombre = 'john';
let apellido = 'Mircha';

//Concatenacion
let saludo = "Hola mi nombre es " + nombre +' '+apellido+'.';
console.log(saludo);

//Interpolacion de variables
//Template String

//Acento invertido alt+} x2 ->``
let saludo2 = `hola mi nombre es ${nombre} ${apellido}.`
console.log(saludo2)

//Si quiero agregar las estaciones del año agregadas al HTML

let ul = "<ul><li>Primavera</li><li>Otoño</li><li>Invierno</li><li>Verano</li></ul>";

//Template String
let ul2 = `<ul>
            <li>Primavera</li>
            <li>Otoño</li>
            <li>Invierno</li>
            <li>Verano</li>
            </ul>`;

console.log(ul2);

let ul3 = "<ul>";

ul3 += "<li>Primavera</li>";
ul3 += "<li>Otoño</li>";
ul3 += "<li>Invierno</li>";
ul3 += "<li>Verano</li>";
ul3 += "</ul>";

