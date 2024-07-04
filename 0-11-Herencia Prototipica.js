// ---------------------------------------------| Herencia prototipicas |--------------------------------------------- //

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

//Funcion Herencia prototipica

function Perro(nombre, genero, tamanio){
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
    lolaBunny = new Animal("Lola Bunny", "Hembra");

//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del prototipo padre en hijo
Perro.prototype.sonar = function(){
    console.log("Soy un Perro y mi sonido es un ladrido");
}
Perro.prototype.ladrar = function(){
    console.log("GUAU GUAU!");
}

console.log(snoopy);
//No estaria funcionando bien esto:
// snoopy.saludar();








