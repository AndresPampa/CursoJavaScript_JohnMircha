// ---------------------------------------------| Prototipos |--------------------------------------------- //

//Js es un lenguaje multiparadigma, podemos utilizar POO, la programacion funcional, etc.
//Aunque tenemos clases el navegador los convierte en funciones prototipicas
//JavaScript es un lenguaje basado en prototipos no en clases
//Dentro de la programacion orienta a objetos tenemos:
/* 
Clases - Modelo a seguir
Objetos - Es una instancia de una clase
    Atributos - Caracteristica o propiedad del objeto. Son variables dentro de un objeto
    Metodos - SOn las acciones que un objeto puede realizar. Son funciones dentro de un objeto
*/

//EJEMPLOS

/* 
const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}
console.log(animal) //Ver en el navegador para el verl proto: Object

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}
console.log(animal2)
*/

//Funcion constructora de PROTOTIPOS
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo");
}
Animal.prototype.saludar = function(){
    console.log(`Hola mi nombre es ${this.nombre}`);
}



const snoopy = new Animal("Snoopy", "Macho"),
    lolaBunny = new Animal("Lola Bunny", "Hembra");


console.log(snoopy);
console.log(lolaBunny);

snoopy.saludar();
lolaBunny.saludar();


