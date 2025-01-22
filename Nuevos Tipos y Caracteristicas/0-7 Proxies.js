// ---------------------------------------------| Generators |--------------------------------------------- //
//Es un nuevo mecanismo que tiene js que permite crear un Objeto basado en un objeto literal inicial. 
// Es un medio de vinculacion de un objeto y la nueva instancia que creamos

const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    //recibe el objeto, las propiedades y el valor
    set(obj, prop, valor){
        //Condicional que Object.key() me da la lista de las llaves y un indexof busca las conincidencias. Va a evaluar que Twitter esta en la lista de las propiedades
        //Aca podriamos agregar varias valicadiones antes de hacer asignacion
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop} no existe en el objeto persona`);
        }
        if((prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúü\s]+$/.test(prop))){
            return console.error(`la propiedad ${prop} no es valida, solo se acepta letras y espacios en blancos`)
        }

        obj[prop] = valor;
    }
}

const pampa = new Proxy(persona, manejador)

console.log(pampa);

//Si no tuvieramos al manejador no podriamos agregar valor. Es como que el handlers nos permite crear una nueva instancia del obj original sin modificarlo
pampa.nombre = "Pampa";
pampa.apellido = "Tu vieja",
pampa.edad = 35;
// pampa.twitter = "@andreselmaspijudo"

console.log(pampa);

