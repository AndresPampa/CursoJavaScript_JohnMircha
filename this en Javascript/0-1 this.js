// ---------------------------------------------| this |--------------------------------------------- //

console.log(this); //Winwos
// console.log(window);
// console.log(this === window);

this.nombre = "contexto Global";
console.log(this.nombre);

function imprimir(){
    console.log(this.nombre)
}

imprimir();

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function(){
        console.log(this.nombre)
    }
}

obj.imprimir()


{
    //En javascript es un bloque
}

const obj2 = {
    nombre: "contexto Objeto 2",
    imprimir: imprimir
}

obj2.imprimir();

const obj3 = {
    nombre: "Contexto Objeto 3",
    imprimir:() => {
        console.log(this.nombre)
    }
}

obj3.imprimir();

function Persona(nombre){
    const that = this;
    that.nombre = nombre;
    // return console.log(this.nombre);
    // return function(){
    //     console.log(this.nombre);
    // }
    // return () => console.log(this.nombre);
    return function(){
        console.log(that.nombre)
    }

}

let jon = new Persona("jon");
jon();
