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
//-------------------------------------------------->| NUMEROS |<--------------------------------------------------

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(typeof d, typeof c)
console.log(a,b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(parseInt(d));
console.log(a + b);
console.log((c + parseInt(d)).toFixed(3));
console.log((c + parseFloat(d)).toFixed(3));

//-------------------------------------------------->| BOOLEAN |<--------------------------------------------------

let verdadero = true;
let falso = false;
let v = new Boolean(true);
let f = new Boolean(false);

console.log(verdadero, falso, v, f);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" "));

//Valores que siempre van a tender a verdadero
// if (true)
// if ({})
// if ([])
// if (42)
// if ("foo")
// if (new Date())
// if (-42)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

//Valores que siempre van a tender a Falso

// if (false)
// if (null)
// if (undefined)
// if (0)
// if (-0)
// if (0n)
// if (NaN)
// if ("")

//-------------------------------------------------->| Undefined, null & NaN |<--------------------------------------------------

//Son casos particulares de js
//Representan valores ausentes pero la diferencia es que undefined no ha sido inicializada y se lo asigna js y null lo asigna el usuario intencionalmente


//Variable que no tiene valor
let indefinida;
console.log(indefinida);

let nulo = null;
console.log(nulo);

//NaN -> Not a Number
let noEsUnNumero = "hola"*3.7;
console.log(noEsUnNumero);

//-------------------------------------------------->| FUNCIONES |<--------------------------------------------------

//Las funciones se consideran objetos. 

//Funciones declaradas
function estoEsUnaFuncion(){
    console.log("Mi primer funcion declarada");
}
//Invocamos la funcion
// estoEsUnaFuncion();


function unaFuncionQueDevuelveValores(){
    console.log('uno');
    return 19; //A penas encuentra un return ignora todas las lineas de abajo
    return "La funcion retorno una cadena de texto";
}
let valorDeFuncion = unaFuncionQueDevuelveValores();
console.log(valorDeFuncion);

function saludar(nombre='Desconocido', edad= 0){
    console.log(`Hola ${nombre} que tiene ${edad} años`);
}

saludar('pampa', 35);
saludar()


//Funciones declaradas VS Funciones expresadas

funcionDeclarada()

function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte del codigo, incluso antes de la declaracion de la funcion");
}

funcionDeclarada()

//Funciones expresadas

//Lo que mas se usa es el const
// funcionExpresada() //cannot acces 'funcionExpresada before initialization
//Funcion anonima
const funcionExpresada = function(){
    console.log("Esto es una funcion expresada");
    console.log("Una funcion que se le ha asignado como valor a una variable");
    console.log('Si invocamos esta funcion antes de su definicion, js nos dira....');
}

funcionExpresada()

//-------------------------------------------------->| Arreglos(Arrays) |<--------------------------------------------------




























