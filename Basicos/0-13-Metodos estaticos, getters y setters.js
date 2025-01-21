// ---------------------------------------------| Metodos estaticos, getters y setters |--------------------------------------------- //

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

    //Un metodo estatico se puede ejcutar sin la necesidad de instanciar la clase
    static queEres(){
        console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos.");
    }

    //Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de los atributos de nuestra clase

}

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        //Con el contructor super() llamamos al constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    ladrar(){
        console.log("Soy un perro y este es mi ladrido: guau Guaw!!!");
    }

    get getRaza(){
        return this.raza; 
    }

    set setRaza(raza){
        this.raza = raza;
    }
}


const mini = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby","Macho", "Gigante");

Perro.queEres();
console.log(scooby.getRaza);
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);