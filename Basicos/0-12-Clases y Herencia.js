// ---------------------------------------------| Clases y Herencia |--------------------------------------------- //

class Animal{

    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar(){
        console.log(`Hola Me llamo ${this.nombre}`);
    }
}


class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        //Con el contructor super() llamamos al constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
    }

    ladrar(){
        console.log("Soy un perro y este es mi ladrido: guau Guaw!!!");
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------
//Instanciamos

const mini = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby","Macho", "Gigante");

console.log(mini);
console.log(scooby);

//Javascript funciona con Prototipos
mini.saludar();
mini.sonar();
scooby.saludar();
scooby.ladrar();
